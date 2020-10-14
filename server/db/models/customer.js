module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    emailAddress: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
  });

  return Customer;
};
