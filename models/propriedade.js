const Sequelize = require('sequelize');
const database = require('../db');
const Equipamento = require('./equipamento');
 
const Propriedade = database.define('propriedade', {
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

// RELACIONAMENTOS
// 1 EQUIPAMENTO para 1 PROPRIEDADE
Propriedade.belongsTo(Equipamento, {
    constraint: true,
    foreignKey: 'idEquipamento'
})

// 1 EQUIPAMENTO para muitas PROPRIEDADES
Equipamento.hasMany(Propriedade, {
    foreignKey: 'idEquipamento'
})
 
module.exports = Propriedade;