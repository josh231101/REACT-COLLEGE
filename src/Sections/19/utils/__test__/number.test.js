import {
  suma,
  resta,
  division,
  multiplicacion,
  getRandomNum
} from "../numbers";

describe("Probando funciones matemáticas", () => {
  test("Probando la funcion suma", () => {
    // toBe - Método que compara por igualdad
    expect(suma(5, 5)).toBe(10);
    expect(suma(5, 5)).not.toBe(9);
  });
  test("Probando la funcion resta", () => {
    // toBe - Método que compara por igualdad
    expect(resta(5, 5)).toBe(0);
    expect(resta(5, 5)).not.toBe(5);
  });
  test("Probando la funcion multiplicación", () => {
    // toBe - Método que compara por igualdad
    expect(multiplicacion(5, 5)).toBe(25);
    expect(multiplicacion(5, 5)).not.toBe(50);
  });
  test("Probando la funcion division", () => {
    // toBe - Método que compara por igualdad
    expect(division(5, 5)).toBe(1);
    expect(division(5, 5)).not.toBe(2);
  });

  test("Probando la función getRandomNum", () => {
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5);
    expect(getRandomNum(5, 10)).toBeLessThanOrEqual(10);
  });
});
