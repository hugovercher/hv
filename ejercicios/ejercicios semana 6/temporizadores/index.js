"use strict";

let conta = 0;
let interval;

function incrementarContador() {
  conta++;
}

function mostrarValorContador() {
  console.log(`Valor del contador: ${conta}`);
}

interval = setInterval(incrementarContador, 1000);

setInterval(mostrarValorContador, 5000);

function detenerTemporizador(tiempo) {
  clearInterval(interval);
  console.log(`El temporizador se ha detenido después de ${tiempo} segundos.`);
}

setTimeout(() => {
  detenerTemporizador(20);
}, 20000);
let contador = 0;

do {
  console.log("Contador: " + contador);
  contador++;
} while (contador < 5);
