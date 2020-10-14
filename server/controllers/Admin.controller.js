const BaseModel = require("../db/models/index");
const Feedback = require("../lib/Feedback");
const Sanitizer = require("../lib/Sanitizer");

exports.updateAdmin = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData;
  let feedback;

  try {
    let result = await BaseModel.Admin.update(updateData, { where: { id } });
    feedback = new Feedback("success", true, result);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "We were unable to process request",
      "Operation failed"
    );
    res.status(500).json(feedback);
  }
};
exports.getDasboardSummary = async (req, res, next) => {
  let feedback;

  try {
    let totalPayments = await BaseModel.Transaction.sum("amountPaid");
    let totalVehicles = await BaseModel.Vehicle.count();
    let totalCustomers = await BaseModel.Customer.count();
    feedback = new Feedback("success", true, {
      totalPayments,
      totalVehicles,
      totalCustomers,
    });

    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback("We were unable to process request", false, null);
    res.status(500).json(feedback);
  }
};
