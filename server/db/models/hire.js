module.exports = (sequelize, DataTypes) => {
  const Hire = sequelize.define("Hire", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    status: { type: DataTypes.STRING },
    hiredAt: { type: DataTypes.DATE },
    returnedAt: { type: DataTypes.DATE },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Customer",
        key: "id",
      },
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Vehicle",
        key: "id",
      },
    },
  });

  Hire.associate = (models) => {
    models.Hire.belongsTo(models.Customer, {
      foreignKey: "customerId",
    });
    models.Hire.belongsTo(models.Vehicle, {
      foreignKey: "vehicleId",
    });
  };

  return Hire;
};
