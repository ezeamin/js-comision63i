/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

- El número debe ser entre 0 y 99999999
- Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
- Debemos calcular el resto de la división entera (modulo) entre el número y el número 23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
- Deberá de repetirse (bucle) el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’

*/
const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

while (true) {
  let numero = prompt('Ingrese su numero de documento');

  if (numero === null) {
    // CANCELAR - SALIR
    break;
  }

  let numeroInt = Number(numero);

  // Verificamos rango Y que sea un número
  if (isNaN(numero) || numero < 0 || numero > 99999999) {
    // Rango no valido
    alert('Ingrese un número valido');
    continue;
  }

  // SI LLEGAMOS HASTA ACA = EL NUMERO DE DNI ES VALIDO

  let resto = numeroInt % 23; // 0 - 22

  const letraDNI = letras.at(resto);

  alert(`La letra para el dni ${numero} es ${letraDNI}`);
}

// while (true) {
//     let letraDNI = "TRWAGMYFPDXBNJZSQVHLCKET"
//     let input = prompt("Ingrese un numero de DNI o pulse 'Cancelar' para detener el ciclo");
//     if (input === null || input === ''){
//         break;
//     } else {
//         let DNI = parseInt(input)
//         if (isNaN(DNI) || DNI < 10000000 || DNI > 99999999){
//             alert("Error, ingrese un numero valido de 8 cifras");
//         } else {
//             let resto = DNI % 23;
//             letraDNI = letraDNI.charAt(resto);
//             alert("La letra del DNI es: " + letraDNI);
//         }

//     }
// }
