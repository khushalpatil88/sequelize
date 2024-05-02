const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  gender: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  mobilenumber: DataTypes.STRING
});

module.exports = User;
