const router = require("express").Router();
const {
  getNotifications,
  deleteNotification,
} = require("../controllers/Notification.controller");

router.get("/notifications/", getNotifications);
router.delete("/notifications/", deleteNotification);

module.exports = router;
