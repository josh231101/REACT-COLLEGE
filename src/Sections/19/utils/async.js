export const getDataCallback = (callback) => {
  // db fetch
  const name = "Josue Arreola";

  setTimeout(() => {
    callback(name);
  }, 2000);
};

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Josue Arreola");
    }, 2000);
  });
};

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 2000);
  });
};
