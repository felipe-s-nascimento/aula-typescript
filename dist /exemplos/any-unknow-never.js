"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
var stringTest = "verificar";
stringTest = anyEstaDeVolta;
var unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
var stringTest2 = "Agora vai";
if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw {
        erro: erro,
        code: codigo
    };
}
jogaErro('deu erro', 500);
