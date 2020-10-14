const router = require("express").Router();
const { getTransactions } = require("../controllers/Transaction.controller");
router.get("/transactions/", getTransactions);

module.exports = router;
