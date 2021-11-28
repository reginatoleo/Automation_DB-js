const Sequelize = require('sequelize');
const database = require('../db');
const Propriedade = require('./propriedade');
 
const cenaEquipamento = database.define('cenaEquipamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})
 
module.exports = cenaEquipamento;