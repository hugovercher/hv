"use strict";
const nombre = "Marta";
let edad = 27;
if (edad < 12) {
  console.log(
    `A Marta le corresponde el descuento infantil(menores de 12 años)`
  );
} else if (edad < 30 && edad >= 12) {
  console.log(
    `A Marta le corresponde el descuento juvenil(menores de 30 años)`
  );
} else if (edad > 60) {
  console.log(
    `A Marta le corresponde el descuento de jubilados(mayores de 60 años)`
  );
} else {
  console.log(`A Marta no le corresponde ningún descuento `);
}
