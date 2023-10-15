"use strict";

let min = 1;
let max = 6;
let numeroDado = Math.floor(Math.random() * (max - min + 1) + min);
if (numeroDado > 1) {
  console.log(`avanza ${numeroDado} casillas`);
} else {
  console.log(`avanza ${numeroDado} casilla`);
}
