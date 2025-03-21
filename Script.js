console.log("Hello World")

console.table(
    { id: 1, tarefa: "estudar JS" },
    { id: 2, tarefa: "praticar Código" }
)

console.group("Grupo  de logs")
console.log("Log 1")
console.log("Log 2")
console.groupEnd()

console.time("Timer")

if ( 1 == 2){
    console.log("nao")
}
console.timeEnd("Timer")

//comentario

/*
    asas
*/

var antigo = "aaaa"

let variavelMutavel = "valor que pode ser alterado"

const variavelImutavel= " valor que nao pode ser alterado"

variavelMutavel = 1

console.log(variavelMutavel)

variavelImutavel = 1 

console.log(variavelImutavel)

//tipos de dados primitivos

let texto = "texto"
console.log(typeof texto)

let numero = 0

let isCompleted = false

let semValor

let nulo = null

let uniqueId = Symbol

let bigNumero = 999999999999n

let hoje = new Date()
console.log(hoje)
