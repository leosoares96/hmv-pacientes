const Sequelize = require('sequelize');
const dotenv = require("dotenv");

dotenv.config({ silent: process.env.NODE_ENV });
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_DATABASE
} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  port: DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    ssl: true
  }
});



module.exports = sequelize;
