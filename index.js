const Equipamento = require('./equipamento');

//index.js
(async () => {
    const database = require('./db');
    const Equipamento = require('./equipamento');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    // CREATE
    /*
    const resultadoCreate = await Equipamento.create({
        nome: 'caixa de som',
        local: 'sala de estar',
        status: 'ON'
    })
    console.log(resultadoCreate);
    */

    // READ
    // lê todos os dados da tabela
    //const equipamentos = await Equipamento.findAll();
    //console.log(equipamentos);
    // lê o dado pelo ID
    //const equipamento = await Equipamento.findByPk(1);
    //console.log(equipamento)

    // UPDATE
    /*
    const equipamento = await Equipamento.findByPk(2);
    console.log(equipamento)
    equipamento.nome = "caixa de som Pioneer";
    const resultadoSave = await equipamento.save();
    console.log(resultadoSave);
    */

    // DELETE
    Equipamento.destroy({ where: { id: 1 }});
})();