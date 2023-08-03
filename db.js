// db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_BD', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
