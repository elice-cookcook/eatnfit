export const exerciseTypeArr = ["유산소", "무산소", "스트레칭"];

export const getExerciseNumByTypeText = (typeText: string) =>
  exerciseTypeArr.indexOf(typeText);
