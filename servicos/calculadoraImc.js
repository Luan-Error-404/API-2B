function efetuarCalculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function retornarStatusImc(imc) {
    let status;

    if (imc < 18.5)
    {
        status = 'Abaixo do Peso';
    }
    else if(imc >= 18.5 && imc < 24.9)
    {
        status = 'Peso Normal';
    }
    else if(imc >= 24.9 && imc < 30)
    {
        status = "Acima do peso"
    }
    else
    {
        status = "Obeso";
    }

    return status;
}

function validaParametro(parametro)
{
    if (parametro) {
        if(isNaN(parametro))
            {
                return false;
            }
            else
            {
                return true;
            }
    }
    else
    {
        return false;
    }
}

export {efetuarCalculoIMC, retornarStatusImc, validaParametro};