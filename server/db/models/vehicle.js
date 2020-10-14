module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    image: { type: DataTypes.TEXT("medium") },
    name: { type: DataTypes.STRING },
    hireCost: { type: DataTypes.DECIMAL(8, 2) },
    capacity: { type: DataTypes.INTEGER(3) },
    status: { type: DataTypes.STRING },
    vehicleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "VehicleType",
        key: "id",
      },
    },
    vehicleManufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "VehicleManufacturer",
        key: "id",
      },
    },
  });

  Vehicle.associate = (models) => {
    models.Vehicle.belongsTo(models.VehicleManufacturer, {
      foreignKey: "vehicleManufacturerId",
    });
    models.Vehicle.belongsTo(models.VehicleType, {
      foreignKey: "vehicleTypeId",
    });
  };

  return Vehicle;
};
