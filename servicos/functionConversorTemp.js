function converter(temperatura, tipo) {
    let convertido;

    if(tipo == "ºC") {
        convertido = (temperatura * 1.8) + 32;
        return convertido
    }
    else if (tipo == "ºF") {
        convertido = (temperatura-32)/1.8;
        return convertido
    }
}

function validar(parametro) {
    if(isNaN(parametro))
    {
        return false;
    }
    else 
    {
        return true;
    }
}

function trocar(tipo) {
    let tipoTrocado;
    if(tipo === 'ºC')
    {
        tipoTrocado = 'ºF'
        return tipoTrocado;
    }
    else if(tipo === 'ºF')
    {
        tipoTrocado = 'ºC'
        return tipoTrocado;
    }
}

exports.converter = converter;
exports.validar = validar;
exports.trocar = trocar;