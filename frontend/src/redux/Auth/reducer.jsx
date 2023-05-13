import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQ, REGISTER_SUCCESS } from "./ActionType";

 
  const initialState = {
    isFetching: false,
    isAuth: false,
    token: null,
    message: "",
    error: null,
  };
  
 export  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQ:return {
        ...state,
        isFetching: true,
        error: null,
      };
      case REGISTER_REQ:
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isAuth: true,
          error: null,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
      case REGISTER_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
