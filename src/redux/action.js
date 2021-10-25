import { GET_BMI } from "./types";

export const getBmi = (bmi) => {
  return {
    type: GET_BMI,
    payload: bmi,
  };
};
