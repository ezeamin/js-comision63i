let arreglo = ["🍟", "🌭", "🍷"];
let numerosDeLaRifa = [652, 147, 2, 3, 695];
let alumnos = ["Bianca", "Ernesto", "Enzo", "Martin"];
let miPrimerArreglo = [];
let emojis = ["🫠", "😠", "😶‍🌫️"];

// console.log(arreglo.length);

// console.log(arreglo);

// Agrega un elemento al final
arreglo.push("🥐");

// console.log(arreglo);

// Elimina el elemento del final
arreglo.pop();

// console.log(arreglo);

// Asignar un nuevo valor a una posicion específica
arreglo[1] = "🥟";

// console.log(arreglo);

// Agregar al comienzo
arreglo.unshift("🥤");

// console.log(arreglo);

// Eliminar el primer elemento
arreglo.shift();

// console.log(arreglo);

// Encontrar el índice de ese elemento
let indiceNoValido = arreglo.indexOf("🌭");
let indiceValido = arreglo.indexOf("🍟");

// -1 cuando NO encuentra el elemento
// otro valor cuando sí

// console.log(indiceNoValido);
// console.log(indiceValido);

// Eliminar y/o agregar elemento(s) desde cierta posicion

// Eliminar 1 elemento desde la posicion 1
arreglo.splice(1, 1);

// console.log(arreglo);

// Agregue 1 elemento desde la posicion 1
arreglo.splice(1, 0, "🍸");

// Param1: Desde qué posicion
// Param2: Cant de elementos a eliminar
// Param3: Elementos a añadir

// console.log(arreglo);

console.log(emojis);

// Recortar arreglo
const nuevosEmojis = emojis.slice(1, 3);

// console.log(emojis)
// console.log(nuevosEmojis)

// Detectar si incluye o no algun elemento
const incluye = emojis.includes("🫠");

// console.log(incluye)

// Unir elementos del arreglo en un string
const lista = alumnos.join("-");

// console.log(lista)

// Unir dos arreglos
const nuevoArreglo = arreglo.concat(emojis);

// console.log(nuevoArreglo)

// let palabraOriginal = prompt('Ingrese algo');
// const arregloPalabra = palabraOriginal.split('');
// const salida = arregloPalabra.join("-")
// console.log(salida);

// Invertir

// const nuevosEmojis2 = emojis.reverse()

// console.log(nuevosEmojis2);

const calculadora = () => {
  // ...
};

// funcion anónima
console.log(emojis.length);
// emojis.forEach((item) => {
//   console.log(item);
// });
// emojis.forEach(function () {});
// emojis.forEach(calculadora);

// for (let i = 0; i < emojis.length; i++) {
//   const item = emojis[i];
//   console.log(item);
// }

// const alumnosFiltrados = alumnos.filter((item) => {
//   return item.charAt(0).toLowerCase() === 'e';
// });

// console.log(alumnosFiltrados);

/*
Crear un arreglo
Acceder a elementos del arreglo: []
Longitud del arreglo: length
Modificar elementos del arreglo: []
Agregar elementos al final del arreglo: push
Eliminar elementos del final del arreglo: pop
Agregar elementos al inicio del arreglo: unshift
Eliminar elementos del inicio del arreglo: shift
Encontrar el índice de un elemento en el arreglo: indexOf
Eliminar elementos mediante el índice: splice
Recortar arreglo: slice
Encontrar si existe un elemento en el arreglo: includes
Unir elementos en un string: join
Unir dos arreglos: concat
Invertir un arreglo: reverse

---------------------------
Callbacks
---------------------------

filter
find
sort
forEach
...
*/
