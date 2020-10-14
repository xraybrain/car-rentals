const router = require("express").Router();
const {
  updateAdmin,
  getDasboardSummary,
} = require("../controllers/Admin.controller");
router.put("/admins/", updateAdmin);
router.get("/admins/dashboard/summary", getDasboardSummary);

module.exports = router;
