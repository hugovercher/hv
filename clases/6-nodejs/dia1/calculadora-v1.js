// console.log(process.argv); //argument vector = array de strings

//en process,argv llegan mis argumentos son (strings)
//solo me interesan los argumentos de la posicion 2 en adelante

//obtener los argumentos de p2 en adelante y guardarlos en variable "argumentos"(array de strigs)

const argumentos = process.argv.slice(2);
//obtener la operacio del primer elemento "argumentos" y guardarla
//en una variable q se llame "operacion"(string)
const operacion = argumentos[0];

//dependiendo del valor de "operacion":
//si es "+":sumar
//si es "-":restar
//si es "/":dividir
//si es "*":multiplicar

switch (operacion) {
  case "+": {
    sumar(number(argumentos[1]), number(argumentos[2]));
    break;
  }
  case "-": {
    restar(number(argumentos[1]), number(argumentos[2]));
    break;
  }
  case "/": {
    dividir(number(argumentos[1]), number(argumentos[2]));
    break;
  }
}


//voy a ejecutar funcion de la
//operacion que me estan pidiendo, pasando como parametros los operandos
//"argumentos" en la posicion "1" y "2"(strings), q tengo
//q convertir en numeros antes d pasarlos como parametro


//el resultado de esa funcion lo voy a guardar en la variable "resultado"

//imprimir en terminal el valor del resultado.
