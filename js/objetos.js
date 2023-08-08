"use strict";

import { generarNumeroAleatorio } from "./utils/utils.js";

//creacion de objeto con notación literal

let Eze = {
  //propiedades
};

let duracionPelicula = '2:15';

const pelicula = {
  //propiedades -> clave: valor
  titulo: 'Barbie',
  duracion: duracionPelicula,
  genero: ['comedia', 'drama', 'musical', 'fantasia'],
  fechaDeEstreno: '03/08/2023',
  estreno: false,
  puntuacion: generarNumeroAleatorio(1, 10),
  // actores: {
  //     actorPrincipal: "egh",
  //     actoresSecundarios: [Eze, Bianca, Facundo]
  // }

  //metodos
  reproducir() {
    document.write('La pelicula se está reproduciendo');
  },
  pausar: () => {
    document.write('La pelicula está pausada');
  },
  monstrarDatos() {
    document.write(`
            ${this.titulo}
        `);
  },
};

console.log(pelicula);
// document.write(pelicula);

//Acceder a una propiedad
document.write(`<h1>${pelicula.titulo}</h1>`);
console.log(pelicula.titulo);
document.write(`<p>${pelicula.duracion}</p>`);
document.write(`<p>${pelicula['fechaDeEstreno']}</p>`);

//modificar una propiedad
pelicula.duracion = '2:00';
document.write(`<p>${pelicula.duracion}</p>`);

//agregar una propiedad
pelicula.clasificacion = '+13';

console.log(pelicula);

//eliminar una propiedad
delete pelicula.estreno;

//accedemos a metodo de un objeto
// pelicula.reproducir()

pelicula.monstrarDatos();
console.log(pelicula.puntuacion);
pelicula.reproducir()
