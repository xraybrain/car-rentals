const router = require("express").Router();
const {
  getVehicles,
  saveVehicles,
  updateVehicle,
  deleteVehicle,
  getVehicle,
} = require("../controllers/Vehicles.controller");
router.get("/vehicles/", getVehicles);
router.get("/vehicles/:id/", getVehicle);
router.post("/vehicles/", saveVehicles);
router.put("/vehicles/", updateVehicle);
router.delete("/vehicles/", deleteVehicle);
module.exports = router;
