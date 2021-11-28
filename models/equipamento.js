const Sequelize = require('sequelize');
const database = require('../db');
const Propriedade = require('./propriedade');
const Cena = require('./cena');
const cenaEquipamento = require('./cenaEquipamento');

 
const Equipamento = database.define('equipamento', {
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
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
})

Equipamento.belongsToMany(Cena, {
    through: {
        model: cenaEquipamento
    },
    foreignKey: 'idEquipamento',
    constraint: true
})

Cena.belongsToMany(Equipamento, {
    through: {
        model: cenaEquipamento
    },
    foreignKey: 'idCena',
    constraint: true
})

Equipamento.hasMany(cenaEquipamento, { foreignKey: 'idEquipamento'});
cenaEquipamento.belongsTo(Equipamento, { foreignKey: 'idEquipamento'});
Cena.hasMany(cenaEquipamento, { foreignKey: 'idCena'});
cenaEquipamento.belongsTo(Cena, { foreignKey: 'idCena'});
 
module.exports = Equipamento;