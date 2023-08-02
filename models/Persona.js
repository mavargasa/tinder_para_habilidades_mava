// models/Persona.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Calificacion = require('./Calificacion');
const Reserva = require('./Reserva');

const Persona = sequelize.define('Persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  habilidades: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tarifa_hora: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Persona.hasMany(Calificacion, { as: 'calificaciones', foreignKey: 'id_persona_calificada' });
Calificacion.belongsTo(Persona, { as: 'personaCalificada', foreignKey: 'id_persona_calificada' });
Persona.hasMany(Reserva, { as: 'reservas', foreignKey: 'id_persona' });
Reserva.belongsTo(Persona, { as: 'persona', foreignKey: 'id_persona' });

module.exports = Persona;
