export const exerciseStrengthArr = ["격렬하게", "강하게", "적당하게", "가볍게"];

export const getExerciseNumByStrengthText = (strengthText: string) =>
  exerciseStrengthArr.indexOf(strengthText);
