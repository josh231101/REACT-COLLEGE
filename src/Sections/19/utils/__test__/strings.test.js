import { saluda, getId, despide } from "../strings";

describe("Pruebas de strings", () => {
  const saludo = saluda("Josue");
  const id = getId();
  const despedir = despide();
  test("Probando la función saluda", () => {
    // toMatch hace un comparación de Strings
    expect(saludo).toMatch(/Hola soy/);
  });

  test("Probando un caracter", () => {
    // Existe un dígito
    expect(saluda("4")).toMatch(/\d/);
  });

  test('There is a "stop" in Christoph', () => {
    expect("Christoph").toMatch("stop");
  });

  test("id has 2 digit slash and 3 igits", () => {
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
  test("Probando función despide", () => {
    expect(despedir).toMatch(/Bye/);
  });
  test("Probando función despide", () => {
    expect(despedir).not.toMatch(/bye/);
  });
});
/**
 * toMatch hace una comparación shallow, es decir,
 * no hace una comparación TAL CUAL
 * toMatch espera un patrón, REGEX O string,
 * evalúa si existen los caracteres en nuestro texto.
 */
