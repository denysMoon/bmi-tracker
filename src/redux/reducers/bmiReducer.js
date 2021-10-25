import { GET_BMI } from "../types";

const initialState = {
  bmi: "",
};

export const bmiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BMI:
      return { ...state, bmi: action.payload };

    default:
      return state;
  }
};
