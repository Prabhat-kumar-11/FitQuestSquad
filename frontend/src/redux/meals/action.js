import axios from "axios";
import { MEALS_FAILURE, MEALS_REQ, MEALS_SUCCESS } from "./actionTypes";
export const getMeal = async (dispatch) => {
  dispatch({ type: MEALS_REQ });
  await axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/meals`)
    .then((res) => {
      //   console.log(res);
      dispatch({ type: MEALS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: MEALS_FAILURE });
    });
};
