/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y por consola.

*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamaño) {
    // if (tamaño) {
    //   this.tamaño = tamaño;
    // } else {
    //   this.tamaño = 10;
    // }
    this.tamañoMaximo = tamaño || 10;
    this.contactos = [];
  }

  añadirContacto(contacto) {
    if (this.contactos.length === this.tamañoMaximo) {
      console.log('No se pueden almacenar más contactos');
      return;
    }

    this.contactos.push(contacto);
  }

  existeContacto(nombre) {
    const coincidencia = this.contactos.find((item) => {
      return item.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (coincidencia) {
      console.log('Existe el contacto');
    } else {
      console.log('No se encontró el contacto');
    }
  }

  listarContactos() {
    this.contactos.forEach((item) => {
      console.log(`${item.nombre}: ${item.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((item) => {
      return item.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (!contacto) {
      console.log('No existe el contacto buscado');
    } else {
      console.log(`${contacto.nombre}: ${contacto.telefono}`);
    }
  }
}

const agenda = new Agenda();
const jorge = new Contacto('Jorge', 1234);
const marta = new Contacto('Marta', 12345);

console.log(agenda);

agenda.añadirContacto(jorge);
agenda.añadirContacto(marta);

console.log(agenda);

agenda.existeContacto('jorge');

agenda.listarContactos();

agenda.buscarContacto('martaaaa');
