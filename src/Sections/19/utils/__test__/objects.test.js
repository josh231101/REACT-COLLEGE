import { createStore } from "../objects";

describe("Test a los Objectos", () => {
  test("Agregar un item en store", () => {
    const store = createStore();
    store.addItem({
      name: "Gerardo",
      id: 1,
      country: "Mexico"
    });

    expect(store.getStore()[0]).toEqual({
      name: "Gerardo",
      id: 1,
      country: "Mexico"
    });
  });
  test("Buscar item por id", () => {
    const store = createStore();
    store.addItem({
      name: "Gerardo",
      id: 1,
      country: "Mexico"
    });
    // toEqual -> Exáctamente igual
    expect(store.getById(1)).toEqual({
      name: "Gerardo",
      id: 1,
      country: "Mexico"
    });
    // toMatchObject() -> Algunas de las propiedades
    expect(store.getById(1)).toMatchObject({
      name: "Gerardo"
    });
    // toHaveProperty() -> Que tenga alguna propiedades
    expect(store.getById(1)).toHaveProperty("name", "Gerardo");
  });
});
