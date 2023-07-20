// EJEMPLO DE SWITCH

// SWITCH

// let numero = 2;

// if (numero > 1) {
//   console.log("El numero es UNO");
// } else if (numero === 2) {
//   console.log("El numero es DOS");
// } else if (numero === 3) {
//   console.log("El numero es TRES");
// } else {
//   console.log("El numero no es del rango válido");
// }

// switch (numero) {
//   case 1: {
//     console.log("El numero es UNO");
//     break;
//   }
//   case 2: {
//     console.log("El numero es DOS");
//     break;
//   }
//   case 3: {
//     console.log("El numero es TRES");
//     break;
//   }
//   default: {
//     console.log("El numero no es del rango válido");
//     break;
//   }
// }


/*
2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingresó un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5 -> Output: Suficiente
Input: 50 -> Output: Número erróneo
Input: hola10 -> Output: Introduce un número válido
*/

// PASOS ---------------------------------------------------

/*
1- Pedimos el numero
2- Verificar si es un numero
3- Verificar que esté entre 0 y 10------------
4- Analizar los rangos y el numero ingresado
5- Mostrar la calificacion en un alert
*/

// PRIMERA VERSION ------------------------------------------

// let numero = prompt("Ingrese un numero del 0 al 10")
let numero = -9;

if (isNaN(numero)) {
  // Si NO es un numero, ingresa al if
  console.log("No ingresó un número valido.");
} else if (!(numero >= 0 && numero <= 10)) {
  // ES un numero, pero fuera del rango
  console.log("Ingrese un numero dentro del rango establecido");
} else {
  // Rango 0-2
  if (numero >= 0 && numero <= 2) {
    console.log("Muy deficiente");
  } else if (numero <= 4) {
    console.log("Insuficiente");
  } else if (numero <= 6) {
    console.log("Suficiente");
  } else if (numero === 7) {
    console.log("Bien");
  } else if (numero <= 9) {
    console.log("Notable");
  } else {
    console.log("Sobresaliente");
  }
}

// SEGUNDA VERSION ------------------------------------------

// let numero = 'hola';

// switch (numero) {
//   case 0:
//   case 1:
//   case 2: {
//     console.log("Muy deficiente");
//     break;
//   }
//   case 3:
//   case 4: {
//     console.log("Insuficiente");
//     break;
//   }
//   case 5:
//   case 6: {
//     console.log("Suficiente");
//     break;
//   }
//   case 7: {
//     console.log("Bien");
//     break;
//   }
//   case 8:
//   case 9: {
//     console.log("Notable");
//     break;
//   }
//   case 10: {
//     console.log("Sobresaliente");
//     break;
//   }
//   default: {
//     console.log("Ingrese un numero valido");
//     break;
//   }
// }