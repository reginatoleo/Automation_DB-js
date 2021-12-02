const prompt = require('prompt-sync')();

function userInput (texto) {
    const name = prompt(texto);
        return name
}

// create equipment
function createEquip(nomeEquip, localEquip, statusEquip, descricaoEquip) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        await database.sync();

        await Equipamento.create({
            nome: nomeEquip,
            local: localEquip,
            status: statusEquip,
            descricao: descricaoEquip
        })
    })();
}

// read equipments
function readEquips() {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        await database.sync();
        
        // retorna todas as CENAS
        const equipamentos = await Equipamento.findAll({
            attributes: ["id", "nome", "local", "status", "descricao"], // selected fields
            include: [{
                model: Propriedade, // tabela
                attributes: ["id", "nome"] // selected fields
            }]
        })
        const equipamentosJSON = JSON.stringify(equipamentos, null, 2)
	    console.log(equipamentosJSON)
    })();
}

function readEquip(idEquip) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        const Cena = require('./models/cena');
        //const cenaEquipamento = require('./models/cenaEquipamento');
        //await database.sync({force: true});
        await database.sync();
        
        // retorna as informações da CENA
        //      retorna também os EQUIPAMENTOS cadastrados na CENA
        const equipamento1 = await Equipamento.findAll({
            attributes: ["id", "nome", "local", "status", "descricao"], // selected fields
            where: {id: idEquip}, // filters here
            include: [{
                model: Propriedade, // tabela
                attributes: ["id", "nome"] // selected fields
            }]
        })
        const cenaJSON = JSON.stringify(cena, null, 2)
	    console.log(cenaJSON)
    })();
}

// update equipment
function updateEquip(idEquip) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        await database.sync();
        
        const equipamento1 = await Equipamento.findAll({
            attributes: ["nome", "local", "status", "descricao"], // selected fields
            where: {id: idEquip}, // filters here
        })
        const equipJSON = JSON.stringify(equipamento1, null, 2)
	    console.log(equipJSON)
    
        var nomeCampo = userInput('DIGITE O NOME DO CAMPO A SER EDITADO: ')
        console.log('NOME DO CAMPO ESCOLHIDO: ', nomeCampo);
        var novoValor = userInput('DIGITE O NOVO VALOR: ')
        console.log('NOME VALOR: ', novoValor);
        
        if (nomeCampo === 'nome'){ await Equipamento.update({ nome: novoValor }, { where: {id: idEquip} }); }
        else if (nomeCampo === 'local'){ await Equipamento.update({ local: novoValor }, { where: {id: idEquip} }); }
        else if (nomeCampo === 'status'){ await Equipamento.update({ status: novoValor }, { where: {id: idEquip} }); }
        else if (nomeCampo === 'descricao'){ await Equipamento.update({ descricao: novoValor }, { where: {id: idEquip} }); }
        else console.log('NOME DO CAMPO ERRADO! TENTE NOVAMENTE. ');
    })();
}

// adiona um equipamento em uma cena
function addEquipToCena(idEquip, idCena) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Cena = require('./models/cena');
        //const cenaEquipamento = require('./models/cenaEquipamento');
        //await database.sync({force: true});
        await database.sync();

        // lê o equipamento escolhido
        const equipamento1 = await Equipamento.findByPk(idEquip);
        // lê cena escolhida
        const cena1 = await Cena.findByPk(idCena);
        // salva no banco (na tabela intermediária (cenaEquipamentos))
        equipamento1.setCenas(cena1);        
    })();
}

//readEquips();
//updateEquip('1');
//createEquip('TV', 'Sala de Estar', 'OFF', 'Televisor de 60"');
//addEquipToCena('2','3');

//module.exports = { createEquip, readEquips, updateEquip };
//module.exports = { addEquipToCena };

module.exports.createEquip=createEquip;
module.exports.readEquips=readEquips;
module.exports.updateEquip=updateEquip;
module.exports.addEquipToCena=addEquipToCena;