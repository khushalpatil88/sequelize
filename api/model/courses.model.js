const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Course = sequelize.define('Course', {
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  topic_name: DataTypes.STRING,
  department_id: DataTypes.INTEGER,
  status: DataTypes.STRING,
  created_by: DataTypes.INTEGER
});

module.exports = Course;
