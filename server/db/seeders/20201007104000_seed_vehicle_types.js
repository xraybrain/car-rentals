module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("VehicleTypes", [
      {
        name: "sedan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "coupe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sports car",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "station wagon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hatchback",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "convertible",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sport utility vehicle (SUV)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "minivan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "pickup truck",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("VehicleTypes", null, {});
  },
};
