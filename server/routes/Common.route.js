const router = require("express").Router();
const { contactByMail } = require("../controllers/Common.controller");
router.post("/common/sendmail/", contactByMail);

module.exports = router;
