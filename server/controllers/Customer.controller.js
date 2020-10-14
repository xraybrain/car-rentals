const BaseModel = require("../db/models/index");
const Sanitizer = require("../lib/Sanitizer");
const Feedback = require("../lib/Feedback");
const Pager = require("../lib/Pager");
const bcrypt = require("bcryptjs");

exports.saveCustomer = async (req, res, next) => {
  let feedback;
  let newCustomer = Sanitizer.sanitize(req.body);
  try {
    // ensure that email does not exists
    let emailExists = await BaseModel.Customer.findOne({
      where: { emailAddress: newCustomer["emailAddress"] },
    });

    if (emailExists) {
      feedback = new Feedback("email already exists", false, null);
      return res.json(feedback);
    }

    // encrypt customer password
    let salt = bcrypt.genSaltSync(12);
    newCustomer["password"] = bcrypt.hashSync(newCustomer["password"], salt);

    let customer = await BaseModel.Customer.create(newCustomer);
    customer.dataValues.id = customer.dataValues.null;

    await BaseModel.Notification.create({
      content: `${customer.name} created a new account.`,
      type: "info",
    });

    feedback = new Feedback("account created successfully", true, customer);
    return res.json(feedback);
    // insert user record
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

exports.getCustomers = async (req, res, next) => {
  let { searchquery, page } = req.query;
  let feedback;
  try {
    let pager = new Pager("Customer", 10);
    if (!searchquery) {
      page = Number(page) || 1;
      await pager.getItems(page);
      feedback = new Feedback("success", true, pager);
      return res.json(feedback);
    }

    let filter = { where: {} };
    filter.where = {
      name: {
        [BaseModel.Sequelize.Op.like]: `%${searchquery}%`,
      },
    };
    let customers = await BaseModel.Customer.findAll(filter);
    pager.results = customers;
    feedback = new Feedback("success", true, pager);
    return res.json(feedback);
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

exports.updateCustomer = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData;
  delete updateData.password;

  try {
    let customer = await BaseModel.Customer.findOne({ where: { id } });
    let result = await BaseModel.Customer.update(updateData, { where: { id } });

    await BaseModel.Notification.create({
      content: `${customer.name} updated his account.`,
      type: "warning",
    });

    let feedback = new Feedback("updated successfully", true, result);
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
