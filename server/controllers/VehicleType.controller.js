const BaseModel = require("../db/models/index");
const Feedback = require("../lib/Feedback");

exports.getVehicleTypes = async (req, res, next) => {
  let feedback;
  try {
    let vehicleTypes = await BaseModel.VehicleType.findAll({});
    feedback = new Feedback("success", true, vehicleTypes);
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
