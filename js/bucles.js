"use strict";

// Muestra por consola la palabra "Mario" 5 veces
/*let i = 0;
while (i < 5) {
  let iString = (i+1).toString();
  
  console.log(iString);

  i += 1;
}*/
/*
for (let i = 0; i < 5; i += 1) {
  let iString = (i + 1).toString();

  console.log(iString);
}*/

/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let cadena = "";
while (true) {
  let texto = prompt("Ingrese texto");

  // Toca cancelar
  if (texto === null) {
    break;
    // continue;
  }

  cadena = cadena + "-" + texto;
}

console.log(`CADENA : ${cadena}`);

// for (; true; ) {
//   let texto = prompt('Ingrese texto');
//   console.log(texto);
// }
