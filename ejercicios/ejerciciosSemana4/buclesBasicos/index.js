"use strict";
for (let hora = 0; hora < 24; hora++) {
  const horaFormateada = hora.toString().padStart(2);
  const cucu = "CUCÚ! ";
  const hour = hora - 12;
  if (hora >= 8 && hora <= 12) {
    console.log(`Son las ${horaFormateada}:00, ${cucu.repeat(hora)}`);
  } else if (hora > 12 && hora <= 22) {
    console.log(`Son las ${horaFormateada}:00, ${cucu.repeat(hour)}`);
  } else {
    console.log(`Son las ${horaFormateada}:00`);
  }
}
