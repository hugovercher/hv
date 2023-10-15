const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function combine(pizzas) {
  const combinations = [];

  // Escribe aquí tu código
  for (let i = 0; i < pizzas.length; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      const mitad1 = pizzas[i];
      const mitad2 = pizzas[j];

      if (mitad1 !== mitad2) {
        const pizzaMitadMitad = [mitad1, mitad2].join(" y ");
        combinations.push(pizzaMitadMitad);
      }
    }
  }

  return combinations;
}

console.log(combine(pizzas));
