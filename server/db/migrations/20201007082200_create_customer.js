module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Customers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.STRING(100), allowNull: false },
      emailAddress: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
      },
      password: { type: Sequelize.STRING(60), allowNull: false },
      phone: { type: Sequelize.STRING(11), allowNull: false },
      address: { type: Sequelize.STRING(300), allowNull: false },
      gender: { type: Sequelize.STRING(6), allowNull: false },
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
    return queryInterface.dropTable("Customers");
  },
};
