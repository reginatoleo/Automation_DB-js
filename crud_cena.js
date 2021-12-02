const prompt = require('prompt-sync')();
const Cena = require('./models/propriedade');
const Equipamento = require('./models/propriedade');

function userInput (texto) {
    const name = prompt(texto);
        return name
}
 /*
        try {
            const resultado = await database.sync();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
        */
       
// C R U D 

// create cena
function createCena(nomeCena, descricaoCena) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        const Cena = require('./models/cena');
        //const cenaEquipamento = require('./models/cenaEquipamento');
        //await database.sync({force: true});
        await database.sync();

        await Cena.create({
            nome: nomeCena,
            descricao: descricaoCena
        })
    })();
}

// read cenas
function readCenas() {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        const Cena = require('./models/cena');
        //const cenaEquipamento = require('./models/cenaEquipamento');
        //await database.sync({force: true});
        await database.sync();
        
        // retorna todas as CENAS
        const cenas = await Cena.findAll({
            attributes: ["id", "nome", "descricao"], // selected fields
            include: [{
                model: Equipamento, // tabela
                attributes: ["id", "nome"] // selected fields
                //where: {id: nomeCena} // filters here
            }]
        })
        const cenasJSON = JSON.stringify(cenas, null, 2)
	    console.log(cenasJSON)
    })();
}

// read cena
function readCena(idCena) {
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
        const cena = await Cena.findAll({
            attributes: ["id", "nome", "descricao"], // selected fields
            where: {id: idCena}, // filters here
            include: [{
                model: Equipamento, // tabela
                attributes: ["id", "nome"] // selected fields
                //where: {id: nomeCena} // filters here
            }]
        })
        const cenaJSON = JSON.stringify(cena, null, 2)
	    console.log(cenaJSON)
    })();
}

// update cena
function updateCena(idCena) {
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
        const cena = await Cena.findAll({
            attributes: ["nome", "descricao"], // selected fields
            where: {id: idCena}, // filters here
        })
        const cenaJSON = JSON.stringify(cena, null, 2)
	    console.log(cenaJSON)

        var nomeCampo = userInput('DIGITE O NOME DO CAMPO A SER EDITADO: ')
        console.log('NOME DO CAMPO ESCOLHIDO: ', nomeCampo);
        var novoValor = userInput('DIGITE O NOVO VALOR: ')
        console.log('NOME VALOR: ', novoValor);

        if (nomeCampo === 'nome'){ await Cena.update({ nome: novoValor }, { where: {id: idCena} }); }
        else if (nomeCampo === 'descricao'){ await Cena.update({ descricao: novoValor }, { where: {id: idCena} }); }
        else console.log('NOME DO CAMPO ERRADO! TENTE NOVAMENTE. ');
    })();
}

// deleta um item da tabela
function deleteItem(nomeTabela, idItem) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        const Cena = require('./models/cena');
        //const cenaEquipamento = require('./models/cenaEquipamento');
        //await database.sync({force: true});
        await database.sync();

        if (nomeTabela === 'equipamento'){ await Equipamento.destroy({ where: { id: idItem } }); }
        else if (nomeTabela === 'cena'){ await Cena.destroy({ where: { id: idItem } }); }
        else if (nomeTabela === 'propriedade'){ await Propriedade.destroy({ where: { id: idItem } }); }
        else console.log('NOME ERRADO DA TABELA! TENTE NOVAMENTE. ');
    })();
}

module.exports = { createCena, readCena, readCenas, updateCena };
module.exports = { deleteItem };