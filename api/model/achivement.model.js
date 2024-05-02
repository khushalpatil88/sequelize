const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Achievement = sequelize.define('Achievement', {
  achievementId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  achievementName: DataTypes.STRING,
  duration: DataTypes.INTEGER,
  courseId: DataTypes.INTEGER,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Achievement;
