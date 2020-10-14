module.exports = (sequelize, DataTypes) => {
  const VehicleType = sequelize.define("VehicleType", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
  });

  return VehicleType;
};
