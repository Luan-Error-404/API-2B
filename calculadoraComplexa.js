const express = require('express');
const app = express();

const servicoCalculadoraComplexa = require('./servicos/servicoCalculadoraComplexa');

app.get ('/', (req, res) => {
    let number1 = req.query.number1;
    let number2 = req.query.number2;
    let operation = req.query.operation;

    if (servicoCalculadoraComplexa.validar(req.query.number1) && servicoCalculadoraComplexa.validar(req.query.number2) && operation == 'Soma' || operation == 'Subtração' || operation == 'Multiplicação' || operation == 'Divisão') {
        let respondido = servicoCalculadoraComplexa.calculo(number1,number2,operation);
        res.json({'Calculo': respondido, 'Operação': operation});
    }
    else {
        res.status(400).json({'Erro': "Valor ou operação inserido inválido, tente novamente!"});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em ' + data);
})