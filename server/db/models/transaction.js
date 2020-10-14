module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    status: { type: DataTypes.STRING },
    paymentRef: { type: DataTypes.STRING },
    amountPaid: { type: DataTypes.DECIMAL(8, 2) },
    hireId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hire",
        key: "id",
      },
    },
  });

  Transaction.associate = (models) => {
    models.Transaction.belongsTo(models.Hire, {
      foreignKey: "hireId",
    });
  };

  return Transaction;
};
