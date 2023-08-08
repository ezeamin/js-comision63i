/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20 -> Output: El 20 es divisible por 2 y por 5.
input: 210 -> Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/
/* PASOS ---------------
1- Pedir el número
2- Llevar el input a tipo number
3- Verificar la divisibilidad en 2,3,5,7
4- Mostrar mensaje indicando por cúal(es) es divisible y si no lo es
*/

// METODO 1 - IF ELSE

// Prompt
let input = Number(2);

if (input % 2 === 0 || input % 3 === 0 || input % 5 === 0 || input % 7 === 0) {
  if (input % 2 === 0) {
    console.log(`El numero ${input} es divisible en 2`);
  }
  if (input % 3 === 0) {
    console.log(`El numero ${input} es divisible en 3`);
  }
  if (input % 5 === 0) {
    console.log(`El numero ${input} es divisible en 5`);
  }
  if (input % 7 === 0) {
    console.log(`El numero ${input} es divisible en 7`);
  }
} else {
  console.log(`El numero ${input} NO es divisible ni en 2,3,5, ni 7`);
}

// METODO 2 - VARIABLE BANDERA

// Prompt
// let input = Number(2);

// let esDivisible = false;

// if (input % 2 === 0) {
//   esDivisible = true;
//   console.log(`El numero ${input} es divisible en 2`);
// }
// if (input % 3 === 0) {
//   esDivisible = true;
//   console.log(`El numero ${input} es divisible en 3`);
// }
// if (input % 5 === 0) {
//   esDivisible = true;
//   console.log(`El numero ${input} es divisible en 5`);
// }
// if (input % 7 === 0) {
//   esDivisible = true;
//   console.log(`El numero ${input} es divisible en 7`);
// }

// if (!esDivisible) {
//   console.log(`El numero ${input} NO es divisible ni en 2,3,5, ni 7`);
// }
