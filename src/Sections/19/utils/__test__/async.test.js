import { getDataCallback, getDataPromise, getDataPromiseError } from "../async";

describe("HAciendo test a operaciones asíncronas", () => {
  test("Haciendo test a callback", (done) => {
    getDataCallback((name) => {
      expect(name).toBe("Josue Arreola");
      done();
    });
  });
  test("Haciendo test a promesa", (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe("Josue Arreola");
      done();
    });
  });
  test("Haciendo test a promesa sin done", () => {
    return expect(getDataPromise()).resolves.toBe("Josue Arreola");
  });
  test("Haciendo test a promesa rechazada", () => {
    return expect(getDataPromiseError()).rejects.toBe("Error");
  });
});
