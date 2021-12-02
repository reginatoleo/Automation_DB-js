const crudCena = require('./crud_cena');
const crudEquip = require('./crud_equip');
const crudProp = require('./crud_prop');
const prompt = require('prompt-sync')();
var menu = require('console-menu');

// função para fazer o input no terminal
function userInput (texto) {
    const name = prompt(texto);
        return name
}

// construção do menu principal
menu([
    { hotkey: '1', title: 'Listar Equipamentos', selected: true },
    { hotkey: '2', title: 'Editar Equipamento' },
    { hotkey: '3', title: 'Novo Equipamento' },
    { separator: true },
    { hotkey: '4', title: 'Listar Cenas' },
    { hotkey: '5', title: 'Editar Cena' },
    { hotkey: '6', title: 'Nova Cena' },
    { separator: true },
    { hotkey: '7', title: 'Editar Propriedade' },
    { hotkey: '8', title: 'Nova Propriedade' },
    { separator: true },
    { hotkey: '9', title: 'Deletar' },
    { separator: true },
    { hotkey: '0', title: 'Adcionar Equipamento em um Cena' },
    { separator: true },
    { hotkey: 'e', title: 'Executar Cena' },
    { separator: true },
    { hotkey: '?', title: 'Help' },
], {
    header: 'Automação Residencial - LR',
    border: true,
}).then(item => {
    if (item) {
        if(JSON.stringify(item).indexOf('1') > -1)
        {
            console.log('Você escolheu: Listar Equipamentos');
            console.log('')
            crudEquip.readEquips();
        }
        else if(JSON.stringify(item).indexOf('2') > -1)
        {
            console.log('Você escolheu: Editar Equipamento');
            console.log('')
            var idEquip = userInput('DIGITE O ID DO EQUIPAMENTO A SER EDITADO: ')
            console.log('ID DO EQUIPAMENTO ESCOLHIDO: ', idEquip);
            // edita banco aqui
            crudEquip.updateEquip(idEquip);
        }
        else if(JSON.stringify(item).indexOf('3') > -1)
        {
            console.log('Você escolheu: Criar Nova Equipamento');
            console.log('')
            var nomeEquip = userInput('DIGITE O NOME DO NOVO EQUIPAMENTO: ')
            var localEquip = userInput('DIGITE O LOCAL DO NOVO EQUIPAMENTO: ')
            var statusEquip = userInput('DIGITE O STATUS DO NOVO EQUIPAMENTO: ')
            var descricaoEquip = userInput('DIGITE A DESCRIÇÃO DO NOVO EQUIPAMENTO: ')
            crudEquip.createEquip(nomeEquip, localEquip, statusEquip, descricaoEquip);
        }
        else if(JSON.stringify(item).indexOf('4') > -1)
        {
            console.log('Você escolheu: Listar Cenas');
            console.log('')
            crudCena.readCenas();
        }
        else if(JSON.stringify(item).indexOf('5') > -1)
        {
            console.log('Você escolheu: Editar Cena');
            console.log('')
            var idCena = userInput('DIGITE O ID DA CENA A SER EDITADA: ')
            console.log('ID DA CENA ESCOLHIDA: ', idCena);
            // edita banco aqui
            crudCena.updateCena(idCena);
        }
        else if(JSON.stringify(item).indexOf('6') > -1)
        {
            console.log('Você escolheu: Criar Nova Cena');
            console.log('')
            var nomeCena = userInput('DIGITE O NOME DA NOVA CENA: ')
            var nomeDescricao = userInput('DIGITE A DESCRIÇÃO DA NOVA CENA: ')
            crudCena.createCena(nomeCena, nomeDescricao);
        }
        else if(JSON.stringify(item).indexOf('7') > -1)
        {
            console.log('Você escolheu: Editar Propriedade');
            console.log('')
            var idProp = userInput('DIGITE O ID DA PROPRIEDADE A SER EDITADA: ')
            console.log('ID DA PROPRIEDADE ESCOLHIDA: ', idProp);
            // edita banco aqui
            crudProp.updatePropriedade(idProp);
        }
        else if(JSON.stringify(item).indexOf('8') > -1)
        {
            console.log('Você escolheu: Criar Nova Propriedade');
            console.log('')
            var nomeProp = userInput('DIGITE O NOME DA NOVA PROPRIEDADE: ')
            var descricaoProp = userInput('DIGITE A DESCRIÇÃO DA NOVA PROPRIEDADE: ')
            var idEquip = userInput('DIGITE O ID DO EQUIPAMENTO DA NOVA PROPRIEDADE: ')
            crudProp.createPropriedade(nomeProp, descricaoProp, idEquip);
        }
        else if(JSON.stringify(item).indexOf('9') > -1)
        {
            console.log('Você escolheu: Deletar');
            console.log('')
            var nomeTabela = userInput('DIGITE O NOME DA TABELA (equipamento, cena ou propriedade): ')
            var idItem = userInput('DIGITE O ID DO ITEM A SER DELETADO: ')
            crudCena.deleteItem(nomeTabela, idItem);
        }
        else if(JSON.stringify(item).indexOf('0') > -1)
        {
            console.log('Você escolheu: Adcionar Equipamento em um Cena');
            console.log('')
            var idEquip = userInput('DIGITE O ID DO EQUIPAMENTO: ')
            console.log('ID DO EQUIPAMENTO ESCOLHIDO: ', idEquip);
            var idCena = userInput('DIGITE O ID DA CENA: ')
            console.log('ID DA CENA ESCOLHIDA: ', idCena);
            // edita banco aqui
            crudEquip.addEquipToCena(idEquip, idCena);
        }
        else if(JSON.stringify(item).indexOf('e') > -1)
        {
            console.log('Você escolheu: Executar Cena');
            console.log('')
            var idCena = userInput('DIGITE O ID DA CENA A SER EXECUTADA: ')
            console.log('ID DA CENA ESCOLHIDA: ', idCena);
            // edita banco aqui
            crudCena.readCena(idCena);
        }

    } else {
        console.log('Você cancelou o menu.');
    }
});