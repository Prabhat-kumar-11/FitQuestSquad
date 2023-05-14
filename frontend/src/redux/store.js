import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Auth/reducer";
import { reducer as mealsReducer } from "./meals/reducer";
import { workoutsRoutinesReducer } from "./Workouts/reducer";
const rootReducer = combineReducers({
  reducer,
  mealsReducer,
  workoutsRoutinesReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
