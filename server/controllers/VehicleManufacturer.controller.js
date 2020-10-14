const BaseModel = require("../db/models/index");
const Feedback = require("../lib/Feedback");

exports.getManufacturers = async (req, res, next) => {
  let feedback;
  try {
    let manufacturers = await BaseModel.VehicleManufacturer.findAll({});
    feedback = new Feedback("success", true, manufacturers);
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
