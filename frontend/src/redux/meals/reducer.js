import { MEALS_FAILURE, MEALS_REQ, MEALS_SUCCESS } from "./actionTypes";

const initial = {
  loading: false,
  error: false,
  meals: [],
};
export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case MEALS_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case MEALS_SUCCESS: {
      return {
        ...state,
        meals: payload,
        loading: false,
        error: false,
      };
    }
    case MEALS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
