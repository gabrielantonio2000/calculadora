const readline = require("readline");

// Función para sumar
const sumar = (a, b) => a + b;

// Función para restar
const restar = (a, b) => a - b;

// Función para multiplicar
const multiplicar = (a, b) => a * b;

// Función para dividir
const dividir = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
};

// Función principal de la calculadora
const calculadora = (valor1, valor2, operacion) => {
  switch (operacion) {
    case "+":
      return sumar(valor1, valor2);
    case "-":
      return restar(valor1, valor2);
    case "*":
      return multiplicar(valor1, valor2);
    case "/":
      return dividir(valor1, valor2);
    default:
      throw new Error("Operación no válida. Use +, -, * o /.");
  }
};

// Configurar readline para leer entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para validar números
const esNumero = (valor) => !isNaN(parseFloat(valor)) && isFinite(valor);

// Función para pedir datos al usuario y ejecutar la calculadora
const ejecutarCalculadora = () => {
  rl.question("Ingrese el primer valor: ", (valor1) => {
    if (!esNumero(valor1)) {
      console.log("El valor ingresado no es un número. Inténtalo de nuevo.");
      return ejecutarCalculadora();
    }
    rl.question("Ingrese el segundo valor: ", (valor2) => {
      if (!esNumero(valor2)) {
        console.log("El valor ingresado no es un número. Inténtalo de nuevo.");
        return ejecutarCalculadora();
      }
      rl.question("Ingrese la operación (+, -, *, /): ", (operacion) => {
        try {
          const resultado = calculadora(
            parseFloat(valor1),
            parseFloat(valor2),
            operacion
          );
          console.log(`El resultado es: ${resultado}`);
        } catch (error) {
          console.error(error.message);
        } finally {
          rl.close();
        }
      });
    });
  });
};

// Ejecutar la calculadora
ejecutarCalculadora();
