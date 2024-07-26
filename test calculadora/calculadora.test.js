// calculadora.test.js

const {
  sumar,
  restar,
  multiplicar,
  dividir,
  calculadora,
} = require("./calculadora");

test("sumar 1 + 2 es igual a 3", () => {
  expect(sumar(1, 2)).toBe(3);
});

test("restar 5 - 3 es igual a 2", () => {
  expect(restar(5, 3)).toBe(2);
});

test("multiplicar 2 * 3 es igual a 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("dividir 6 / 3 es igual a 2", () => {
  expect(dividir(6, 3)).toBe(2);
});

test("dividir por cero lanza un error", () => {
  expect(() => dividir(6, 0)).toThrow("No se puede dividir por cero.");
});

test("calculadora suma correctamente", () => {
  expect(calculadora(1, 2, "+")).toBe(3);
});

test("calculadora resta correctamente", () => {
  expect(calculadora(5, 3, "-")).toBe(2);
});

test("calculadora multiplica correctamente", () => {
  expect(calculadora(2, 3, "*")).toBe(6);
});

test("calculadora divide correctamente", () => {
  expect(calculadora(6, 3, "/")).toBe(2);
});

test("calculadora lanza error con operación no válida", () => {
  expect(() => calculadora(1, 2, "%")).toThrow(
    "Operación no válida. Use +, -, * o /."
  );
});
