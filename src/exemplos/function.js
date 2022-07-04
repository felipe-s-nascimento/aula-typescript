"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return Number(input1) + Number(input2);
    }
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
//console.log(somarValores(1,5))
//console.log(somarValores("ola", ", tudo bem?"))
//console.log(somarValores('que dia é hoje? ','5'))
