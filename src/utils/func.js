export const showDesription = (bmi) => {
  if (bmi < 16) {
    return "It means, you have an underwaight - severe thinnes.";
  } else if (bmi < 16.9) {
    return "It means, you have an underwaight - moderate thinnes.";
  } else if (bmi < 18.4) {
    return "It means, you have an underwaight - mild thinnes.";
  } else if (bmi < 24.9) {
    return "Your BMI is normal.";
  } else if (bmi < 29.9) {
    return "It means, you have an owerweight - preobese.";
  } else if (bmi < 34.9) {
    return "It means, you have an owerweight - obese (Clas I).";
  } else if (bmi < 39.9) {
    return "It means, you have an owerweight - obese (Clas II).";
  } else if (bmi > 40) {
    return "It means, you have an owerweight - obese (Clas III).";
  }
};
