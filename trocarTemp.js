const express = require("express");
const app = express();

const functionConversorTemp = require('./servicos/functionConversorTemp');

app.get ('/', (req, res) => {
    let temperatura = req.query.temperatura;
    let tipo = req.query.tipo;

    if (functionConversorTemp.validar(req.query.temperatura) && req.query.tipo == 'ºC' || req.query.tipo == 'ºF') 
    {
        let resposta = functionConversorTemp.converter(temperatura,tipo);
        let novoTipo = functionConversorTemp.trocar(tipo);

        res.json ({'conversão': resposta, 'tipo atual': novoTipo});
    }
    else {
        res.status(400).json({'Erro':'Valores passados incorretamente!'})
    }
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em ' + data);
});