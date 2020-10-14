const BaseModel = require("../db/models/index");
const Sanitizer = require("../lib/Sanitizer");
const Feedback = require("../lib/Feedback");
const Pager = require("../lib/Pager");

exports.getVehicle = async (req, res, next) => {
  let { id } = req.params;
  let feedback;

  try {
    let vehicle = await BaseModel.Vehicle.findByPk(id, {
      include: [
        { model: BaseModel.VehicleType },
        { model: BaseModel.VehicleManufacturer },
      ],
    });
    feedback = new Feedback("success", true, vehicle);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "Server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.getVehicles = async (req, res, next) => {
  let { page, searchquery } = req.query;
  let feedback;
  let include = [
    { model: BaseModel.VehicleManufacturer },
    { model: BaseModel.VehicleType },
  ];

  try {
    let pager = new Pager("Vehicle", 10);

    if (!searchquery) {
      page = Number(page) || 1;
      await pager.getItems(page, include);
      feedback = new Feedback("vehicles", true, pager);
      return res.json(feedback);
    }
    let filter = {
      include,
      where: {
        name: {
          [BaseModel.Sequelize.Op.like]: `%${searchquery}%`,
        },
      },
    };

    let vehicles = await BaseModel.Vehicle.findAll(filter);
    pager.results = vehicles;
    feedback = new Feedback("found vehicles", true, pager);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "Server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.saveVehicles = async (req, res, next) => {
  let newVehicle = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let vehicle = await BaseModel.Vehicle.create(newVehicle);
    vehicle.dataValues.id = vehicle.dataValues.null;
    feedback = new Feedback("vehicle saved", true, vehicle);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "Server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.updateVehicle = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData;
  let feedback;
  try {
    let result = await BaseModel.Vehicle.update(updateData, { where: { id } });
    feedback = new Feedback("success", true, result);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "Server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  let { id } = req.body;
  let feedback;
  try {
    let result = await BaseModel.Vehicle.destroy({ where: { id } });
    feedback = new Feedback("success", true, result);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "Server was unable to process request",
      false,
      null
    );
    res.status(500).json(feedback);
  }
};
