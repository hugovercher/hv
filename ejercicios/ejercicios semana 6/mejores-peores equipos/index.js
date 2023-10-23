// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

// // Escribe aquí tu código

const puntosEquipo = firstRound.map((datos) => ({
  team: datos.team,
  totalPuntos: datos.scores.reduce((acc, puntos) => acc + puntos, 0),
}));

const mejorEquipo = puntosEquipo.reduce((mejor, total) =>
  total.totalPuntos > mejor.totalPuntos ? total : mejor
);
const worstTeam = puntosEquipo.reduce((peor, total) =>
  total.totalPuntos < peor.totalPuntos ? total : peor
);

console.log(
  `El mejor equipo es ${mejorEquipo.team} con un total de ${mejorEquipo.totalPuntos} puntos`
);
console.log(
  `El peor equipo es ${worstTeam.team} con un total de ${worstTeam.totalPuntos} puntos`
);
