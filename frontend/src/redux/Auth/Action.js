import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAILURE,
  REGISTER_REQ,
  REGISTER_SUCCESS,
} from "./ActionType";

export const loginAction = (inputValue) => async (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  return await axios
    .post(`http://localhost:8080/user/login`, inputValue)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.Message })
    );
};

export const registerAction = (inputValue) => (dispatch) => {
  dispatch({ type: REGISTER_REQ });
  return axios
    .post(`http://localhost:8080/user/register`, inputValue)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data.Message,
      })
    );
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
