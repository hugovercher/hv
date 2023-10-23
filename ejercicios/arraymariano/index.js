"use strict";

//  Construye una funcion en donde dado un string  regrese el mismo string invertido. Ej. dado 'Index' regresara 'xednI'
function invertir(nombre) {
  const nombreArreglo = nombre.split("");
  const nombreReverse = nombreArreglo.reverse();
  const fin = nombreReverse.join("");
  console.log(fin);
}
invertir("Hola");

function invertir(nombre) {
  return nombre.split("").reverse().join("");
}
const inverted = invertir("hola invert");
console.log(inverted);
// Construye una funcion que dado un array numerico regrese otro array con los numeros elevado al cuadrado. Ej. dado [1,4,5] regresara [2,16, 25]const numeros = [10, 15, 20, 25, 30];
const numeros = [1, 4, 5];

const numerosCuadrado = numeros.map((num) => num * num);

console.log(numerosCuadrado);

// Construye una funcion que dado un array de numeros, regrese el numero mas alto y el mas bajo en tal array. Ej. dado [1, 4, 5, 99, -60] regresara [99, -60]//? Constuye una funcion que dado un array de numeros regrese un objeto con dos arreglos, en el primer arreglo se almacenaran numero pares y en el segundo numeros impares
function encontrarMaximoMinimo(array) {
  if (array.length === 0) {
    return [];
  }

  let maximo = array[0];
  let minimo = array[0];

  for (let numero of array) {
    if (numero > maximo) {
      maximo = numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }
  }

  return [maximo, minimo];
}

let num = [1, 4, 5, 99, -60];
let result = encontrarMaximoMinimo(num);
console.log(result);

//? Constuye una funcion que dado un array de numeros regrese un objeto con dos arreglos, en el primer arreglo se almacenaran numero pares y en el segundo numeros impares
//? Ej. dado [1,2,3,4,5,6,7,8,9,0] regresara {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
function separarParesImpares(array) {
  const resultado = {
    pares: [],
    impares: [],
  };

  for (let numero of array) {
    if (numero % 2 === 0) {
      resultado.pares.push(numero);
    } else {
      resultado.impares.push(numero);
    }
  }

  return resultado;
}

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const resultado = separarParesImpares(numero);
console.log(resultado);
