const router = require("express").Router();
const {
  getManufacturers,
} = require("../controllers/VehicleManufacturer.controller");
router.get("/manufacturers/", getManufacturers);

module.exports = router;
