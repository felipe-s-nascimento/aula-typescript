let anyEstaDeVolta: any

anyEstaDeVolta = 3

anyEstaDeVolta = "teste"

let stringTest: string = "verificar"

stringTest = anyEstaDeVolta

let unknownValor: unknown

unknownValor = 3
unknownValor = "opa"
unknownValor = true

let stringTest2: string = "Agora vai"

if(typeof unknownValor === "string"){
    stringTest2 = unknownValor    
}

function jogaErro(erro: string, codigo: number): never{

    throw {
        erro: erro,
        code: codigo
    }

}



jogaErro('deu erro', 500)