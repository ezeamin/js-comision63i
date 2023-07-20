/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

// Acá se utiliza un bucle dentro de otro bucle
// El bucle externo se encarga de los números
// El bucle interno se encarga de las repeticiones de ese número
// Ejemplo: si el número es 5, el bucle interno se encarga de las 5 repeticiones de ese número
// Revisar la condicion de corte del bucle interno, para que no se repita de más!!!!

// Primer bucle, para c/ numero
for (let i = 0; i < 10; i++) {
  let cadena = '';

  // Segundo bucle, para las repeticiones de ese número
  for (let j = 0; j < i; j++) {
    cadena += i;
  }

  console.log(cadena);
}
