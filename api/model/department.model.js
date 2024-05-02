const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Department = sequelize.define('Department', {
  departmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  department_name: DataTypes.STRING,
  image_url: DataTypes.STRING,
  status: DataTypes.STRING,
  created_by: DataTypes.INTEGER
});

module.exports = Department;
