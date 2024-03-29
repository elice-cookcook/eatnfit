import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Exercise } from "../types";
import { ExerciseContent } from "../types";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ROUTE } from "../routes/Route";

const postExercise = async (
  date: string,
  exercise: ExerciseContent
): Promise<Exercise> => {
  const response = await axios.post(`/api/v1/exercises/${date}`, exercise);
  console.log(exercise);
  return response.data;
};

export function usePostExercise(date: string, exercise: ExerciseContent) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => postExercise(date, exercise), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-all-exercise", date]);
      queryClient.invalidateQueries(["get-daily-kcal", date]);
      message.success("운동 기록을 추가했습니다.");
      navigate(ROUTE.MAIN_PAGE.link);
    },
    onError: () => {
      message.error("운동 기록 추가에 실패했습니다.");
    },
  });
}
