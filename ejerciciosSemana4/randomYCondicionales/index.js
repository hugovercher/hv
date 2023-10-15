"use strict";

let min = 1;
let max = 7;
let numeroDado = Math.floor(Math.random() * (max - min) + min);
if (numeroDado > 1) {
  console.log(`avanza ${numeroDado} casillas`);
} else {
  console.log(`avanza ${numeroDado} casilla`);
}
