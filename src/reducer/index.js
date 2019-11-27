const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        data: action.payload,
        error: null
      };

    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
