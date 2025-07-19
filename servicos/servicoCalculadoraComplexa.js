function calculo(number1, number2, operation) {
    let resposta;
    if (operation == "Soma") {
        resposta = number1 + number2;
        return resposta;
    }
    else if (operation == "Subtração") {
        resposta = number1 - number2;
        return resposta;
    }
    else if (operation == "Divisão") {
        resposta = number1 / number2;
        return resposta;
    }
    else if (operation == "Multiplicação") {
        resposta = number1 * number2;
        return resposta;
    }
}

function validar(parametro) {
    if((isNaN(parametro))){
        return false;
    }
    else {
        return true;
    }
}

exports.calculo = calculo;
exports.validar = validar;