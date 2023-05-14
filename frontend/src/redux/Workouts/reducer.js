import { WORKOUTS_FAILURE, WORKOUTS_GET, WORKOUTS_ROUTINES_FAILURE, WORKOUTS_ROUTINES_GET, WORKOUTS_ROUTINES_SUCCESS, WORKOUTS_SUCCESS } from "./actionTypes"

const initialWorkoutsRoutinesState = {
    loading: false,
    error: false,
    workoutsRoutines: [],
}

export const workoutsRoutinesReducer = (state = initialWorkoutsRoutinesState, {type, payload}) => {
    switch(type) {
        case WORKOUTS_ROUTINES_GET:
            return {
                ...state,
                loading: true
            }
        case WORKOUTS_ROUTINES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                workoutsRoutines: payload
            }
        case WORKOUTS_ROUTINES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
