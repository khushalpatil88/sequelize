const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Achievement = sequelize.define('Achievement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  note: DataTypes.STRING
});

module.exports = Achievement;
