import { getData, setData } from "../../utilis/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAILURE,
  REGISTER_REQ,
  REGISTER_SUCCESS,
} from "./ActionType";

const initialState = {
  isFetching: false,
  isAuth: false,
  token: getData("token") || "",
  user: getData("user") || "",
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case REGISTER_REQ:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      setData("token", payload.token);
      setData("user", payload.user);
      return {
        ...state,
        isFetching: false,
        token: payload.token,
        user: payload.user,
        isAuth: true,
        error: true,
      };
    case LOG_OUT:
      setData("token", "");
      setData("user", "");
      return {
        ...state,
        isAuth: false,
        token: "",
        user: "",
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
        error: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
