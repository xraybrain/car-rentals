module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("VehicleManufacturers", [
      {
        name: "Hyundai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mercedes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lexus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mazda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toyota",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("VehicleManufacturers", {}, {});
  },
};
