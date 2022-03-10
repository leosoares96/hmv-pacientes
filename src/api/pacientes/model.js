const Sequelize = require('sequelize');
const database = require('../../database/connection')

const Paciente = database.define('TB_paciente', {
  id_paciente: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  idade: {
    type: Sequelize.INTEGER
  }
})


module.exports = Paciente