//const express = require('express');
import express from 'express';
const app = express();
import {efetuarCalculoIMC, retornarStatusImc, validaParametro} from'./servicos/calculadoraImc.js';

app.get('/', (req, res) => {
    let peso =  req.query.peso;
    let altura = req.query.altura;

    if(validaParametro(peso) && validaParametro(altura))
    {
        let imc = efetuarCalculoIMC(peso,altura);
        let status = retornarStatusImc(imc);

        let json = {imc: imc, status: status};

        res.json(json);
    }
    else
    {
        res.status(400).json({'Erro':'Peso ou altura inválidos.'});
    }

    let imc = efetuarCalculoIMC(peso, altura);
    let status = retornarStatusImc(imc);

    let json = {imc: imc, status: status};

    res.json({json});
});

app.listen(8080, () => {
    let data = new Date();
console.log("Servidor node iniciado em:" + data);
});