"use strict";

let contador = 0;
let interval;

function incrementarContador() {
  contador++;
}

function mostrarValorContador() {
  console.log(`Valor del contador: ${contador}`);
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
