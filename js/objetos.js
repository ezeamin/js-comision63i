//creacion de objeto con notación literal

let Eze = {
    //propiedades
}

let duracionPelicula = "2:15";

const pelicula = {
    //propiedades -> clave: valor
    titulo: "Barbie",
    duracion: duracionPelicula,
    genero: ["comedia", "drama", "musical", "fantasia"],
    fechaDeEstreno: "03/08/2023",
    estreno: false,
    // actores: {
    //     actorPrincipal: "egh",
    //     actoresSecundarios: [Eze, Bianca, Facundo]
    // }

    //metodos
    reproducir: function () {
        document.write("La pelicula se está reproduciendo");
    },
    pausar: () => {
        document.write("La pelicula está pausada");
    }
}

const pelicula2 = {
    //propiedades -> clave: valor
    titulo: "Barbie",
    duracion: duracionPelicula,
    genero: ["comedia", "drama", "musical", "fantasia"],
    fechaDeEstreno: "03/08/2023",
    estreno: false,
    // actores: {
    //     actorPrincipal: "egh",
    //     actoresSecundarios: [Eze, {}]
    // }

    //metodos
    reproducir: function () {
        document.write("La pelicula se está reproduciendo");
    },
    pausar: () => {
        document.write("La pelicula está pausada");
    }
}