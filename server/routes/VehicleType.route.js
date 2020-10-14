const router = require("express").Router();
const {
  getVehicleTypes,
} = require("../controllers/VehicleType.controller");
router.get("/vehicletypes/", getVehicleTypes);

module.exports = router;
