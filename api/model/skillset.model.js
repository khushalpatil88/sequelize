const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const SkillSet = sequelize.define('SkillSet', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.INTEGER,
  skill: DataTypes.STRING,
  percentage: DataTypes.INTEGER,
  status: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER,
  updated_on: DataTypes.DATE,
  updated_by: DataTypes.INTEGER
});

module.exports = SkillSet;
