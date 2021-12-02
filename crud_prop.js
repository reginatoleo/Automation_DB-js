const prompt = require('prompt-sync')();
const Cena = require('./models/propriedade');
const Equipamento = require('./models/propriedade');

function userInput (texto) {
    const name = prompt(texto);
        return name
}

// create propriedade
function createPropriedade(nomePropriedade, descricaoPropriedade, idEquip) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Propriedade = require('./models/propriedade');
        await database.sync();

        await Propriedade.create({
            nome: nomePropriedade,
            descricao: descricaoPropriedade,
            idEquipamento: idEquip
        })
    })();
}

// read propriedades
function readPropriedades() {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Equipamento = require('./models/equipamento');
        const Propriedade = require('./models/propriedade');
        await database.sync();
        
        const propriedades = await Propriedade.findAll({
            attributes: ["id", "nome", "descricao"], // selected fields
            include: [{
                model: Equipamento, // tabela
                attributes: ["nome"] // selected fields
            }]
        })
        const propriedadesJSON = JSON.stringify(propriedades, null, 2)
	    console.log(propriedadesJSON)
    })();
}

// update propriedade
function updatePropriedade(idPropriedade) {
    (async () => {
        // inicia conexão com a database
        const database = require('./db');
        const Propriedade = require('./models/propriedade');
        await database.sync();
        
        const propriedade1 = await Propriedade.findAll({
            attributes: ["nome", "descricao"], // selected fields
            where: {id: idPropriedade}, // filters here
        })
        const propriedadeJSON = JSON.stringify(propriedade1, null, 2)
	    console.log(propriedadeJSON)
    
        var nomeCampo = userInput('DIGITE O NOME DO CAMPO A SER EDITADO: ')
        console.log('NOME DO CAMPO ESCOLHIDO: ', nomeCampo);
        var novoValor = userInput('DIGITE O NOVO VALOR: ')
        console.log('NOME VALOR: ', novoValor);

        if (nomeCampo === 'nome'){ await Propriedade.update({ nome: novoValor }, { where: {id: idPropriedade} }); }
        else if(nomeCampo === 'descricao'){ await Propriedade.update({ descricao: novoValor }, { where: {id: idPropriedade} }); }
        else console.log('NOME DO CAMPO ERRADO! TENTE NOVAMENTE. ');
    })();
}

// exporting modules
module.exports.createPropriedade=createPropriedade;
module.exports.readPropriedades=readPropriedades;
module.exports.updatePropriedade=updatePropriedade;