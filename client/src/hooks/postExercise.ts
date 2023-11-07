import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Exercise } from "../types";
import { ExerciseContent } from "../types/ExerciseContent";

const postExercise = async (
  date: number,
  exercise: ExerciseContent
): Promise<Exercise> => {
  const response = await axios.post(`/api/v1/exercises/${date}`, exercise);
  return response.data;
};

export function usePostExercise(date: number, exercise: ExerciseContent) {
  const queryClient = useQueryClient();
  return useMutation(() => postExercise(date, exercise), {
    onSuccess: () => {
      queryClient.invalidateQueries("get-all-exercise");
    },
  });
}
