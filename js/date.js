'use strict';

/*
Gestor de Tareas con Fechas

Desarrolla un gestor de tareas que permita a los usuarios administrar sus tareas diarias. La  capacidad de almacenamiento del gestor deberá estar definida en el gestor. Cada tarea estará compuesta por un título, una descripción y una fecha de vencimiento.

Los métodos del gestor de tareas serán los siguientes:

1. `agregarTarea(Tarea)`: Agrega una tarea a la lista. Si la lista está llena, muestra un mensaje indicando que no se pueden agregar más tareas. La fecha será pedida en el formato DD/MM/AAAA.

2. `existeTarea(titulo)`: Indica si la tarea pasada existe o no en la lista.

3. `listarTareas()`: Lista todas las tareas en la aplicación, incluyendo sus fechas de vencimiento en formato DD/MM/AAAA. Indicar en cada tarea cuantos días faltan para esa fecha.

4. `buscarTarea(titulo)`: Busca una tarea por su título y muestra su descripción y fecha de vencimiento en formato DD/MM/AAAA.

5. `eliminarTarea(titulo)`: Elimina la tarea de la lista y muestra un mensaje indicando si se ha eliminado o no.

6. `listaCompleta()`: Indica si la lista de tareas está completa.

7. `huecosDisponibles()`: Indica cuántas tareas más se pueden agregar a la lista.

Crea un menú con las siguientes opciones que serán seleccionadas por el usuario usando un prompt:

1. Agregar Tarea
2. Buscar Tarea
3. Listar Tareas
4. Eliminar Tarea
5. Verificar Lista Completa
6. Ver Huecos Disponibles
7. Salir

Las salidas de las operaciones seleccionadas por el usuario se pueden mostrar tanto en pantalla como por consola.
*/

// 1- Declarar las clases
class Tarea {
  constructor(titulo, descripcion, fechaVenc) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    // "aaaa-mm-dd"
    this.fechaVenc = new Date(fechaVenc);
  }
}

class GestorTareas {
  constructor(limite) {
    this.tareas = [];
    this.limite = Number(limite) || 10;
  }

  añadirTarea(tarea) {
    if (this.limite === this.tareas.length) {
      console.log('No se puede agregar por falta de espacio');
    } else {
      this.tareas.push(tarea);
    }
  }

  existeTarea(tituloABuscar) {
    const coincidencia = this.tareas.find((item) => {
      return item.titulo.toLowerCase() === tituloABuscar.toLowerCase();
    });

    if (coincidencia) {
      console.log('La tarea existe');
    } else {
      console.log('La tarea no existe');
    }
  }

  buscarTarea(tituloABuscar) {
    const coincidencia = this.tareas.find((item) => {
      return item.titulo.toLowerCase() === tituloABuscar.toLowerCase();
    });

    if (coincidencia) {
      console.log('Tarea encontrada:', coincidencia);
    } else {
      console.log('No se encontró esa tarea');
    }
  }

  listarTareas() {
    this.tareas.forEach((item, index) => {
      const fecha = item.fechaVenc.toLocaleDateString();
      const hoy = new Date();
      const diferencia = Math.ceil(
        (item.fechaVenc - hoy) / (1000 * 24 * 60 * 60)
      ); // Number of seconds in a day = 24 * 60 * 60 = 86400 seconds;
      console.log(
        `${index + 1} - ${item.titulo} - ${
          item.descripcion
        } - ${fecha} - Faltan ${diferencia} días `
      );
    });
  }

  eliminarTarea(tituloAEliminar) {
    const indice = this.tareas.findIndex((item) => {
      return item.titulo.toLowerCase() === tituloAEliminar.toLowerCase();
    });

    if (indice === -1) {
      console.log('No se encontró la tarea a eliminar');
      return;
    }

    this.tareas.splice(indice, 1);

    console.log(`Se eliminó la tarea con título ${tituloAEliminar}`);
  }

  listaCompleta() {
    if (this.tareas.length === this.limite) {
      console.log('Lista llena');
    } else {
      console.log('Lista no completa');
    }
  }

  huecosDisponibles() {
    const diferencia = this.limite - this.tareas.length;

    console.log(`Quedan ${diferencia} huecos disponibles`);
  }
}

const crearTarea = () => {
  const titulo = prompt('Introduzca el título');
  const descripcion = prompt('Introduzca la descripcion');
  const fechaVenc = prompt('Introduzca la fecha de vencimiento');

  // Formatear la fecha!!!!!!!!!!
  // 10/8/2023 -> ["10","8","2023"]
  const año = fechaVenc.split('/')[2];
  const mes = fechaVenc.split('/')[1];
  const dia = fechaVenc.split('/')[0];

  //   const fecha2 = fechaVenc.split('/').reverse().join('-');
  const fecha = `${año}-${mes}-${dia}`;

  // Agregar validaciones

  const tarea = new Tarea(titulo, descripcion, fecha);

  return tarea;
};

// 2- Pedir cantidad de posiciones máximas
let limite = prompt('Ingrese el limite del gestor');

if (limite === null || isNaN(limite)) {
  console.log('No ingresó un limite adecuado, se utilizará 10 para el límite');
  limite = 10;
}

// 3- Crear el gestor
const gestor = new GestorTareas(limite);

// 4- Crear el menu
while (true) {
  const opcion = prompt(`
Menú de Gestión de Tareas:
1. Agregar Tarea
2. Buscar Tarea
3. Listar Tareas
4. Eliminar Tarea
5. Verificar Lista Completa
6. Ver Huecos Disponibles`);

  if (opcion === null) {
    break;
  }

  switch (opcion) {
    case '1': {
      const nuevaTarea = crearTarea();
      gestor.añadirTarea(nuevaTarea);
      console.log("")
      break;
    }
    case '2': {
      const titulo = prompt('Ingrese el titulo a buscar');
      // Validar el título
      gestor.buscarTarea(titulo);
      console.log("")
      break;
    }
    case '3': {
      gestor.listarTareas();
      console.log("")
      break;
    }
    case '4': {
      const titulo = prompt('Ingrese el titulo a buscar');
      // Validar el título
      gestor.eliminarTarea(titulo);
      console.log("")
      break;
    }
    case '5': {
      gestor.listaCompleta();
      console.log("")
      break;
    }
    case '6': {
      gestor.huecosDisponibles();
      console.log("")
      break;
    }
    default: {
      console.log('Introduzca un número válido');
      console.log("")
    }
  }
}
