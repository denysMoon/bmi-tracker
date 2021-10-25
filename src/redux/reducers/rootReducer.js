import { combineReducers } from "redux";
import { bmiReducer } from "./bmiReducer";

export const rootReducer = combineReducers({
  bmi: bmiReducer,
});
