export const getDataCallback = (callback) => {
  // db fetch
  const name = "Josue Arreola";

  setTimeout(() => {
    callback(name);
  }, 100);
};

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Josue Arreola");
    }, 100);
  });
};

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 100);
  });
};

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/5");
  const user = await res.json();
  return user;
};
