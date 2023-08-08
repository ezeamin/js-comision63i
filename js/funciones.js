/*
Escribe una función llamada saludar que tome un nombre como parámetro y devuelva un saludo personalizado. 
Por ejemplo, si el nombre es "Juan", la función debería devolver "¡Hola, Juan!".
*/

/*
Crea una función llamada calculadora que tome dos números y una operación como parámetros y realice la operación correspondiente.
Las operaciones pueden ser "suma", "resta", "multiplicacion" y "division". Por ejemplo, si la operación es "suma" y los números son 5 y 3, la función debe devolver 8
*/

// FUNCIONES -------------------------------

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function saludarMundo() {
  console.log(`¡Hola! Bienvenido/a a nuestro sitio web.`);
}

const calculadora = (num1, num2, operacion) => {
  let resultado = 0;

  switch (operacion) {
    case "suma": {
      resultado = num1 + num2;
      break;
    }
    case "resta": {
      resultado = num1 - num2;
      break;
    }
    case "multiplicacion": {
      resultado = num1 * num2;
      break;
    }
    case "division": {
      if (num2 === 0) {
        console.error("El denominador no puede ser 0");
        break;
      }
      resultado = num1 / num2;
      break;
    }
    default: {
      console.error("No ingresó una operacion válida");
    }
  }

  return resultado;
};

// Arrow function - ES6
// Funcion de flecha
const saludarGabi = () => {
  console.log(`¡Hola Gabi! Bienvenida a nuestro sitio web.`);
};

// OTRA LOGICA  -------------------------------

const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Ingrese numeros válidos");
} else {
  const resultado = calculadora(num1, num2, "division");
  console.log(resultado);
}

saludar("Juan");

saludarMundo();
