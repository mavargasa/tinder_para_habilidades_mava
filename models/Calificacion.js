// models/Calificacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Calificacion = sequelize.define('Calificacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comentario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Calificacion;
