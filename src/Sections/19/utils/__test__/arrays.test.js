import { createStore } from "../arrays";

describe("Haciendo pruebas a listas / Arrays", () => {
  test("Probando agregar una nueva fruta", () => {
    const store = createStore();

    store.addFruits("fresa");

    expect(store.getFruits()).toStrictEqual(["fresa"]);
  });
  test("Probando agregar dos frutas", () => {
    const store = createStore();

    store.addFruits("fresa");
    store.addFruits("melon");

    expect(store.getFruits()).toStrictEqual(["fresa", "melon"]);
  });
  test("Probando si contiene una prueba específica", () => {
    const store = createStore();

    store.addFruits("manzana");
    store.addFruits("pera");

    expect(store.getFruits()).toContain("manzana");
    expect(store.getFruits()).not.toContain("melon");
  });
  test("Probando longitud del array", () => {
    const store = createStore();

    store.addFruits("fresa");
    store.addFruits("kiwi");
    store.addFruits("melon");

    expect(store.getFruits()).toHaveLength(3);
  });
  test("Probando agregar un objecto con informacion de frutas", () => {
    const store = createStore();

    store.addFruits({
      name: "fruta",
      price: 10
    });

    expect(store.getFruits()).toContainEqual({
      name: "fruta",
      price: 10
    });
  });
});
