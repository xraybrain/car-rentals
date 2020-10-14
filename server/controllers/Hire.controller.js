const BaseModel = require("../db/models/index");
const Sanitizer = require("../lib/Sanitizer");
const Feedback = require("../lib/Feedback");
const Pager = require("../lib/Pager");
const Transaction = require("../lib/Transaction");
const { execTransaction } = require("../lib/helpers");

exports.getHires = async (req, res, next) => {
  let { page, cid, searchquery } = req.query;
  let feedback;
  let whereClause = {};
  page = page || 1;

  if (cid) {
    whereClause["customerId"] = cid;
  }

  try {
    let pager = new Pager("Hire", 10, whereClause);
    if (!searchquery) {
      await pager.getItems(page, [
        { model: BaseModel.Customer },
        {
          model: BaseModel.Vehicle,
          include: [
            { model: BaseModel.VehicleType },
            { model: BaseModel.VehicleManufacturer },
          ],
        },
      ]);
      feedback = new Feedback("success", true, pager);
      return res.json(feedback);
    }
    pager.results = await BaseModel.Hire.findAll({
      where: {
        [BaseModel.Sequelize.Op.or]: [
          { id: searchquery },
          { status: searchquery },
        ],
      },
      include: [
        { model: BaseModel.Customer },
        {
          model: BaseModel.Vehicle,
          include: [
            { model: BaseModel.VehicleType },
            { model: BaseModel.VehicleManufacturer },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    feedback = new Feedback("success", true, pager);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.saveHire = async (req, res, next) => {
  let transaction = await BaseModel.sequelize.transaction();
  let formData = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let newHire = {
      customerId: formData["customerId"],
      vehicleId: formData["vehicleId"],
      status: "active",
      hiredAt: formData["hiredAt"],
      returnedAt: formData["returnedAt"],
    };
    let hire = await BaseModel.Hire.create(newHire, { transaction });
    let newTransaction = new Transaction(
      hire.null,
      formData["paymentRef"],
      "hire",
      formData["amountPaid"]
    );
    // insert into transaction
    await execTransaction(newTransaction, transaction);
    // update vehicle status
    await BaseModel.Vehicle.update(
      { status: "hired" },
      { where: { id: formData["vehicleId"] }, transaction }
    );

    let customer = await BaseModel.Customer.findByPk(formData["customerId"]);
    let vehicle = await BaseModel.Vehicle.findByPk(formData["vehicleId"]);
    await BaseModel.Notification.create({
      content: `${customer.name} hired ${vehicle.name}, transaction reference is ${formData["paymentRef"]}.`,
      type: "info",
    });
    feedback = new Feedback("transaction was successful", true, null);
    res.json(feedback);
    transaction.commit();
  } catch (error) {
    transaction.rollback();
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.renewHire = async (req, res, next) => {
  let transaction = await BaseModel.sequelize.transaction();
  let formData = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let { hireId } = formData;
    let result = await BaseModel.Hire.update(
      { hiredAt: formData["hiredAt"], returnedAt: formData["returnedAt"] },
      { where: { id: hireId }, transaction }
    );
    let newTransaction = new Transaction(
      hireId,
      formData["paymentRef"],
      "renewed",
      formData["amountPaid"]
    );
    await execTransaction(newTransaction, transaction);

    await BaseModel.Notification.create({
      content: `a customer renewed hire, transaction reference is ${formData["paymentRef"]}.`,
      type: "info",
    });

    feedback = new Feedback("success", true, null);
    res.json(feedback);
    transaction.commit();
  } catch (error) {
    transaction.rollback();
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.completeHire = async (req, res, next) => {
  let { id } = req.body;
  let feedback;
  console.log(req.body);
  try {
    let hire = await BaseModel.Hire.findByPk(id, { raw: true });
    if (hire == null) throw new Error("Hire not found");
    let vehicleId = hire.vehicleId;
    let customerId = hire.customerId;

    await BaseModel.Hire.update({ status: "complete" }, { where: { id } });
    await BaseModel.Vehicle.update(
      { status: "available" },
      { where: { id: vehicleId } }
    );

    let customer = await BaseModel.Customer.findByPk(customerId);
    let vehicle = await BaseModel.Vehicle.findByPk(vehicleId);
    await BaseModel.Notification.create({
      content: `${customer.name} brought back ${vehicle.name}, hire is now complete.`,
      type: "info",
    });

    feedback = new Feedback("success", true, null);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.updateHire = async (req, res, next) => {
  let feedback;
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData;
  delete updateData.hiredAt;
  delete updateData.returnedAt;

  try {
    result = await BaseModel.Hire.update(updateData, { where: { id } });
    feedback = new Feedback("success", true, result);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.overdueHire = async (req, res, next) => {
  let transaction = await BaseModel.sequelize.transaction();
  let formData = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let hire = await BaseModel.Hire.findByPk(formData["hireId"], { raw: true });
    if (hire == null) throw new Error("Hire not found");
    let vehicleId = hire.vehicleId;
    let customerId = hire.customerId;

    await BaseModel.Hire.update(
      { status: "complete" },
      { where: { id: formData["hireId"] }, transaction }
    );
    await BaseModel.Vehicle.update(
      { status: "available" },
      { where: { id: vehicleId }, transaction }
    );

    let newTransaction = new Transaction(
      formData["hireId"],
      formData["paymentRef"],
      "overdue",
      formData["amountPaid"]
    );

    await execTransaction(newTransaction, transaction);

    let customer = await BaseModel.Customer.findByPk(customerId);
    let vehicle = await BaseModel.Vehicle.findByPk(vehicleId);
    await BaseModel.Notification.create({
      content: `${customer.name} paid an overdue charge for the hire  of ${vehicle.name}, transaction reference is ${formData["paymentRef"]}.`,
      type: "info",
    });
    feedback = new Feedback("success", true, null);
    res.json(feedback);
    transaction.commit();
  } catch (error) {
    transaction.rollback();
    console.log(error);
    feedback = new Feedback(
      "server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};
