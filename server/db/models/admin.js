module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    emailAddress: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
  });

  return Admin;
};
