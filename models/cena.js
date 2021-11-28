const Sequelize = require('sequelize');
const database = require('../db');
const Propriedade = require('./propriedade');
 
const Cena = database.define('cena', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
})
 
module.exports = Cena;