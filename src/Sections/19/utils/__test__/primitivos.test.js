const getValue = (exp) => {
  switch (exp) {
    case "definido":
      return {};
    case "indefinido":
      return undefined;
    case "verdadero":
      return true;
    case "falso":
      return false;
    default:
      return null;
  }
};

describe("Testear valores null, undefined y booleans", () => {
  test("Validar si existe o está definido un valor", () => {
    expect(getValue("definido")).toBeDefined();
  });
  test("Validar Si el valor es null", () => {
    expect(getValue()).toBeNull();
  });
  test("Validar Si el valor es verdadero", () => {
    expect(getValue("verdadero")).toBeTruthy();
  });
  test("Validar Si el valor es falso", () => {
    expect(getValue("falso")).toBeFalsy();
  });
  test("Validar Si el valor eS NaN", () => {
    expect(NaN).toBeNaN();
  });
});
