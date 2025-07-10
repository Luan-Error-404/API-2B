import express from 'express';
const app = express();
import {} from'./servicos/functionConversorTemp.js';

app.get('/', (req, res) => {
    let number =  req.query.number;
    let type = req.query.type;

    if(validaParametro(req.query.peso) && validaParametro(req.query.altura))
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