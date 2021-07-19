export const createStore = () => {
  let fruits = [];

  return {
    addFruits: (fruit) => {
      fruits = [...fruits, fruit];
    },
    getFruits: () => {
      return fruits;
    }
  };
};
