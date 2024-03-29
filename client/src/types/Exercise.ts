export interface Exercise {
  _id: string;
  date: number;
  user_id: string;
  name: string;
  exercise_type: number;
  exercise_part: number;
  strength: number;
  time: number;
  kcal: number;
}

export type ExerciseContent = Omit<Exercise, "date" | "_id" | "user_id">;
