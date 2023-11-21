import {
  dividir,
  factorial,
  multiplicar,
  restar,
  sumar,
} from "./operaciones.js";

// console.log(process.argv); //Argument Vector = Array de strings

//En process.argv llegan mis argumentos (strings)
// Solo me interesan los argumentos de la posición 2 en adelante

// Obtener los argumentos de la posición 2 en adelante y guardarlos
// en la variable 'argumentos' (array de strings)
const argumentos = process.argv.slice(2); //["+","1","2"]

// Obtener la operación del primer elemento de 'argumentos' y guardarla
// en una variable que se llame 'operación' (string)
const operación = argumentos[0]; // "+"

// dependiendo del valor de 'operación', voy a ejecutar una función
// de la operación que me están pidiendo, pasando como parámetro los operandos 'argumentos' en la posición '1' y '2' (strings), convertirlos a números antes de pasarlos cómo parámetro.

// el resultado de esa función lo voy a guardar en la variable 'resultado' (numero)
let resultado;
//Dependiendo del valor de 'operación':
// si es "+": sumar
// si es "-": restar
// si es "/": dividir
// si es "*": multiplicar
switch (operación) {
  case "+": {
    resultado = sumar(Number(argumentos[1]), Number(argumentos[2]));
    break;
  }
  case "-": {
    resultado = restar(Number(argumentos[1]), Number(argumentos[2]));
    break;
  }
  case "/": {
    resultado = dividir(Number(argumentos[1]), Number(argumentos[2]));
    break;
  }
  case "*": {
    resultado = multiplicar(Number(argumentos[1]), Number(argumentos[2]));
    break;
  }
  case "!": {
    resultado = factorial(Number(argumentos[1]));
    break;
  }
  default: {
    throw new Error("Operando no identificado!");
  }
}

// imprimir en terminal el valor de resultado.
console.log(resultado);
