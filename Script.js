/*
console.log("Olá");
console.info("O site vai explodir");
console.warn("Aviso");
console.error("Erro");

//Tabelas
console.table([
    { id: 1, tarefa: "Estudar Js"}, 
    { id: 2, tarefa: "Praticar Js"}
]);

// Agrupamento 
console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

//Medição de tempo
console.time("Timer");
//algum processamento 
console.timeEnd('Timer');
*/

//variaveis let
/*
let texto = "Olá"

let numero = 42

let isCompleted = false

let semValor;

let nulo = null

let uniqueId = Symbol ("id")

let bigNumero = 99999999999999n;

console.log(texto, typeof texto); 
*/
/*
let task = [
    { id: 1, descrição: "aula de js" },
    { id: 2, descrição: "aula de html"},
    { id: 3, descrição: "aula de python"},
]
*/
//fazer array aq

/*
let task = { id: 1, descrição: "aula de JS"
, data: new data
}*/

//

/*let a = 10
let b = 3

console.log()
console.log()
console.log()
console.log()
console.log()
*/

//js 2

//let tarefaConcluida = true
//if ( tarefaConcluida) {
//  console.log("A tarefa esta concluida")}

/*switch (key) {
  case value:
      
      break;
 
  default:
      break;
}*/

/*for (let i = 0; i >= 10; i++) {
  console.log("Contagem", i)
}*/

/*let contador = 0

 while (contador <5) {
   console.log("contagem", contador)
   contador++;
 }*/


/*let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;

    console.log(pattern.test("+55(11)9817-3542"))

    console.log(pattern.test("+55(11)5514-2689"))*/


//Aula 3

/*let trabalhoFeito = true; 

if (trabalhoFeito) { 
  console.log("o trabalho foi feito");
}*/




/*let prioridade = 3;
console.log("Qual nível:")

if (prioridade === 1) {
  console.log("Prioridade Baixa");
} else if (prioridade === 2) {
  console.log("Prioridade moderada");
} else if (prioridade === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Prioridade desconhecida");
}*/



/*let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  // ...
  default:
    console.log("Dia inválido");
    break;
}*/


/*let contador = 0;
while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}*/


/*let titulo = "aprender java"
let descrição = "Estudar manipulação"

console.log(titulo, typeof (titulo))
console.log(descrição, typeof (descrição))

console.log("Tamanho", titulo.length)
console.log("Tamanho da descrição", descrição.length)

const palavra = "palavra"
console.log("caracter selctor", palavra.charAt (3))*/



/*let categoria = "estudo"

let infoCompleta = "Categoria" = categoria + categoria + " - " + titulo
console.log(categoria)*/



/*let texto1  = "Posição do javascript "

console.log(texto1.indexOf("javacript"))

console.log(texto1.startsWith(Posição))//endswith mesma coisa*/


/*let texto = "javascript,programação,front,web "

console.log("texto original", texto)

console.log("Texto slice", texto.slice(0, 10))
console.log("texto sub", texto.substring(0, 10))

let arrayTags = texto.split(",")

console.table(arrayTags)

console.log (arrayTags.join(","))*/

/*const destacarTermo = (texto, termo) => {
  if (!termo) return termo
  const regex = new RegExp(termo, "gi")

  return texto.replace(regex, `**$&**`)

  let busca = destacarTermo("Javascript é uma linguagem incrível, amo java script ")
  cosnole.log ("Resultado", busca)

 }


 console.log("math.pi", Math.pi)
 console.log("math.E", Math.E)

 const raio = 5 

 const areaCirculo = Math.pi + Math.pow(raio, 2)*/


/* const numero = 9.7

 console.log(Math.round(numero))
 console.log(Math.floor(numero))
 console.log(Math.ceil(numero))
 console.log(Math.trunc(numero))*/


/*const numeroAleatorioentre = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1 ) + min) 
}

consle.log(numeroAleatorioentre(1, 100))*/



/*const hoje =  new Date()

console.log(new Date("2025-04-12"))
console.log(new Date("04-12-2025T12:00"))*/

/*const hoje = new Date()

const formatarData = (data) => {
  const dia = data.getDate().tostring().padStart(2, "0");
  const mes = (data.getMonth() +1 ).todtring()
  const ano = data.getFullYear()

  return`$(dia);$(mes);$(ano)`
}

console.log(hoje.getDate())
console.log(hoje.getMonth())
console.log(hoje.getFullYear())

console.log(hoje )

console.log(formatarData(hoje))

const adicionarDias = (data, dia) => {
    const novaData = new Date(data)

    novaData.setDate
}*/


const hoje = new Date ();

const dataFinal = new Date("05-11-2025")

const diferencaMs = dataFinal - hoje

console.log(diferencaMs)

const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24))

console.log("Diferença em dias:", diferencaMs)
