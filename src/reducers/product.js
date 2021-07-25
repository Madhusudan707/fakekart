export const initialState = {
  data: [],
  response: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS":
      return {
        data: action.payload,
        response: action.payload,
      };
    case "ON_FAILURE":
      return {
        response: [],
      };

    case "LOW_TO_HIGH":
      return { ...state, response: action.payload.response };

    case "HIGH_TO_LOW":
      return { ...state, response: action.payload.response };

    case "FILTER_BY_BRAND":
      console.log("x",action.payload.response)
      return { ...state, response: action.payload.response };

    case "FILTER_BY_GENDER":
      return { ...state, response: action.payload.response };

    case "FILTER_BY_SIZE":
      return { ...state, response: action.payload.response };

    default:
      return state;
  }
};
