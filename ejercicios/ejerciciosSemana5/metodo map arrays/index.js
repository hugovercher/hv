"use strict";

const rickandmortyCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    url: "https://rickandmortyapi.com/api/character/3",
    created: "2017-11-04T19:09:56.428Z",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    url: "https://rickandmortyapi.com/api/character/4",
    created: "2017-11-04T19:22:43.665Z",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    url: "https://rickandmortyapi.com/api/character/5",
    created: "2017-11-04T19:26:56.301Z",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    gender: "Female",
    origin: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    location: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    url: "https://rickandmortyapi.com/api/character/6",
    created: "2017-11-04T19:50:28.250Z",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Testicle Monster Dimension",
      url: "https://rickandmortyapi.com/api/location/21",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    url: "https://rickandmortyapi.com/api/character/7",
    created: "2017-11-04T19:59:20.523Z",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    url: "https://rickandmortyapi.com/api/character/8",
    created: "2017-11-04T20:03:34.737Z",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    url: "https://rickandmortyapi.com/api/character/9",
    created: "2017-11-04T20:06:54.976Z",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Worldender's lair",
      url: "https://rickandmortyapi.com/api/location/4",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    url: "https://rickandmortyapi.com/api/character/10",
    created: "2017-11-04T20:19:09.017Z",
  },
];

// Escribe aquí tu código
const personajeSimplificado = rickandmortyCharacters.map((personaje) => {
  return {
    name: personaje.name,
    status: personaje.status,
    species: personaje.species,
    gender: personaje.gender,
  };
});

console.log(personajeSimplificado);
// for (const fin of personajeSimplificado) {
//   // let a = fin.name + " " + fin.status + " " + fin.species + " " + fin.gender;
//   console.log(fin);
// }
("use strict");

const textoJson =
  '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';

const objetoJson = JSON.parse(textoJson);

console.log(objetoJson);
// //? Crea una funcion que haga una llamada usando fetch a la API de pokemon y imprima en consola un arreglo de 3 pokemones en donde
// //? cada pokemon sea un objeto que contenga las siguientes propiedades:
// RES = [
//   {
//     name: "string",
//     abilities: [{ name: "string" }, { name: "doe" }],
//     type: "string",
//     stats: [{ stat: "name", value: number }], //* {stat: strength, value: 42}
//   },
//   {
//     name: "string",
//     abilities: [{ name: "string" }, { name: "doe" }],
//     type: "string",
//     stats: [{ stat: "name", value: number }], //* {stat: strength, value: 42}
//   },
//   {
//     name: "string",
//     abilities: [{ name: "string" }, { name: "doe" }],
//     type: "string",
//     stats: [{ stat: "name", value: number }], //* {stat: strength, value: 42}
//   },
// ];
const URL = "https://pokeapi.co/api/v2/";

const getPokemonInfo = async (name) => {
  const res = await fetch(`${URL}pokemon/${name}`);
  const data = await res.json();
  console.log(data);
};
getPokemonInfo("pikachu");
("use strict");

function getCharacterData(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  fetch(url)
    .then((response) => response.json())
    .then((character) => {
      console.log("Información del personaje:", character);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Llama a la función con el ID del personaje que deseas consultar
getCharacterData(8);

/* Reemplaza el 3 en getCharacterData(3) con el ID del personaje que deseas obtener de la API de "Rick and Morty". */
