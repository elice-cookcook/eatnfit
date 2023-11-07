export const exercisePartArr = [
  "전신",
  "팔",
  "복근",
  "허리",
  "등",
  "하체",
  "어깨",
  "가슴",
  "엉덩이",
  "코어",
];

export const getExerciseNumByPartText = (partText: string) =>
  exercisePartArr.indexOf(partText);
