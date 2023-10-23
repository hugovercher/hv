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
// const unico = names.filter((x, i) => names.indexOf(x) === i);
// console.log(unico);
let simpleNames = new Set(names);
let arrSimpleNames = Array.from(simpleNames);
console.log(arrSimpleNames);

const objJson =
  '{"nombre":"Sandra","edad":32,"intereses":["fútbol","lectura"]}';

const objJS = JSON.parse(objJson);

console.log(objJS); // => { nombre: 'Sandra', edad: 32, intereses: [ 'fútbol', 'lectura' ] }

console.log(objJS.nombre); // => Sandra
