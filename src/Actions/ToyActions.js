export const addToy = (toyName) => {
  return {
    type: "ADD_TOY",
    payload: toyName,
  };
};
