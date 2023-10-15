const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// function eliminarDuplicados(arr) {
//   return arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });
// }
// const resultado = eliminarDuplicados(names);
// console.log(resultado);
const unico = names.filter((x, i) => names.indexOf(x) === i);
console.log(unico);
