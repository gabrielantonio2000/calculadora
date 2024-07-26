// calculadora.js

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

module.exports = { sumar, restar, multiplicar, dividir, calculadora };
