module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Transactions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hireId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Hires",
          key: "id",
        },
      },
      paymentRef: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: "hire",
      },
      amountPaid: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Transactions");
  },
};
