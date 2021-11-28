const Cena = require('./models/propriedade');

//index.js
(async () => {
    const database = require('./db');
    const Equipamento = require('./models/equipamento');
    const Propriedade = require('./models/propriedade');
    const Cena = require('./models/cena');
    //const cenaEquipamento = require('./models/cenaEquipamento');
    //await database.sync({force: true});
    await database.sync();
 
    /*
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    */

    // CREATE --------------------------------------------------------------------------------------------------------------------------------------------------
    //CRIAÇÃO NOVO EQUIPAMENTO
    /*
    const novoEquipamento = await Equipamento.create({
        nome: 'Cortina',
        local: 'sala de estar',
        status: 'ON',
        descricao: 'Cortina da janela principal'
    })
    console.log(novoEquipamento);
    */
    
    //CRIAÇÃO NOVA PROPRIEDADE
    /*
    const novaPropriedade = await Propriedade.create({
        nome: 'Fechada',
        descricao: 'Cortina fechada',
        //idEquipamento: novoEquipamento.id
        idEquipamento: '1'
     })
    console.log(novaPropriedade);
    */

    //CRIAÇÃO NOVA CENA
     /*
    const novaCena = await Cena.create({
        nome: 'Filme',
        descricao: 'Seção de Filme',
     })
    
    //EQUIPAMENTO FAZENDO PARTE DE UMA CENA
    const equipamento = await Equipamento.findByPk(1);
    await equipamento.setCenas([novaCena]);
     */    

    // READ --------------------------------------------------------------------------------------------------------------------------------------------------
    // lê todos os dados da tabela
    //const equipamentos = await Equipamento.findAll();
    //console.log(equipamentos);
    // lê o dado pelo ID
    //const equipamento = await Equipamento.findByPk(1);
    //console.log(equipamento);
    // retorna o nome do EQUIPAMENTO baseado no ID do equipamento utilizando o método LAZY LOADING
    /*
    const equipamento = await Equipamento.findByPk(1);
    console.log(equipamento.nome);
    const propriedades = await equipamento.getPropriedades();
    console.log(propriedades);
    */
    // retorna o nome da PROPRIEDADE baseado no ID do equipamento utilizando o método EAGER LOADING
    //const equipamento = await Equipamento.findByPk(1, { include: Propriedade});
    //console.log(equipamento.propriendades);
    // retorna as cenas cadastradas para um equipamento
    const equipamento = await Equipamento.findByPk(1, {
        include: Cena
    });
    console.log(equipamento.cenas);

    // UPDATE --------------------------------------------------------------------------------------------------------------------------------------------------
    /*
    const equipamento = await Equipamento.findByPk(2);
    console.log(equipamento)
    equipamento.nome = "caixa de som Pioneer";
    const resultadoSave = await equipamento.save();
    console.log(resultadoSave);
    */

    // DELETE --------------------------------------------------------------------------------------------------------------------------------------------------
    //Equipamento.destroy({ where: { id: 1 }});
})();