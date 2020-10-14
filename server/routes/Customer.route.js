const router = require("express").Router();
const {
  saveCustomer,
  getCustomers,
  updateCustomer,
} = require("../controllers/Customer.controller");

router.get("/customers/", getCustomers);
router.post("/customers/", saveCustomer);
router.put("/customers/", updateCustomer);

module.exports = router;
