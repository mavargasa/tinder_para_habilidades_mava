// models/Trabajo.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona'); // Importamos el modelo Persona para la clave foránea

const Trabajo = sequelize.define('Trabajo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_persona: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Persona,
      key: 'id',
    },
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monto_pago: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Trabajo;
