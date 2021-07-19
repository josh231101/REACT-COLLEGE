import {
  getDataCallback,
  getDataPromise,
  getDataPromiseError,
  getUsers
} from "../async";

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
  test("Haciendo test a promesa resuelta con async await", async () => {
    const name = await getDataPromise();
    expect(name).toBe("Josue Arreola");
  });
  test("Haciendo test a promesa resuelta fallida con async/await", async () => {
    try {
      const name = await getDataPromiseError();
      expect(name).toBe("Josue Arreola");
    } catch (e) {
      expect(e).toBe("Error");
    }
  });

  test("Probando promesa con solicitud HTTP", async () => {
    const user = await getUsers();
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
  });
});
