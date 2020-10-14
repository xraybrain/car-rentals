const BaseModel = require("../db/models/index");
const Feedback = require("../lib/Feedback");

exports.getNotifications = async (req, res, next) => {
  let feedback;
  try {
    let notifications = await BaseModel.Notification.findAll({
      order: [["createdAt", "DESC"]],
    });
    feedback = new Feedback("success", true, notifications);
    res.json(feedback);
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      "We were unable to pprocess your request",
      true,
      null
    );
    res.status(500).json(feedback);
  }
};

exports.deleteNotification = async (req, res, next) => {
  let { id } = req.body;
  let feedback;
  try {
    let result = await BaseModel.Notification.destroy({ where: { id } });
    feedback = new Feedback("success", true, result);
  } catch (error) {
    console.log(error);
    feedback = new Feedback("We were unable to process request", false, null);
    res.status(500).json(feedback);
  }
};
