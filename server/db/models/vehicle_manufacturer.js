module.exports = (sequelize, DataTypes) => {
  const VehicleManufacturer = sequelize.define("VehicleManufacturer", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true },
  });

  return VehicleManufacturer;
};
