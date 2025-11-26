const initialState = {
  toys: [],
};

function toyReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TOY":
      return {
        ...state,
        toys: [...state.toys, action.payload],
      };
    default:
      return state;
  }
}

export default toyReducer;
