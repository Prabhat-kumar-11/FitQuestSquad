import axios from "axios";
import { WORKOUTS_ROUTINES_FAILURE, WORKOUTS_ROUTINES_GET, WORKOUTS_ROUTINES_SUCCESS } from "./actionTypes"

export const getWorkoutsRoutines = (dispatch) => {
    dispatch({type: WORKOUTS_ROUTINES_GET});

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/workouts`)
    .then(res => {
        // console.log(res);
        dispatch({type: WORKOUTS_ROUTINES_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: WORKOUTS_ROUTINES_FAILURE});
    })
}
