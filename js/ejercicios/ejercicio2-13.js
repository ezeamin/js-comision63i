/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

/*
  PASOS
  1- pedir un texto
  2- Ir caracter por caracter buscando las vocales, contándolas
  3- mostrar el resultado
*/

const texto = "Este es Un texto lol xd";

let cantidadDeVocales = 0;
let letra;
for (let i = 0; i < texto.length; i += 1) {
  letra = texto.at(i).toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    cantidadDeVocales += 1;
  }
}

console.log(cantidadDeVocales);
