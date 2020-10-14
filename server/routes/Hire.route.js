const router = require("express").Router();
const {
  getHires,
  saveHire,
  renewHire,
  completeHire,
  updateHire,
  overdueHire,
} = require("../controllers/Hire.controller");
router.get("/hires/", getHires);
router.post("/hires/", saveHire);
router.post("/hires/renew", renewHire);
router.post("/hires/complete", completeHire);
router.put("/hires/", updateHire);
router.post("/hires/overdue", overdueHire);
module.exports = router;
