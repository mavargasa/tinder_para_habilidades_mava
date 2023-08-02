// db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tinder', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
