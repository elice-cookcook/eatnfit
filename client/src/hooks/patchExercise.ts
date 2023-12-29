import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Exercise } from "../types";
import { ExerciseContent } from "../types/ExerciseContent";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const patchExercise = async (
  date: string,
  exerciseId: string,
  exercise: ExerciseContent
): Promise<Exercise> => {
  const response = await axios.patch(
    `/api/v1/exercises/${date}?id=${exerciseId}`,
    exercise
  );
  return response.data;
};

export function usePatchExercise(
  date: string,
  exerciseId: string,
  exercise: ExerciseContent
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => patchExercise(date, exerciseId, exercise), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-all-exercise", date]);

      message.success("운동 기록을 수정했습니다.");
      navigate("/main");
    },
    onError: (error: Error) => {
      message.error(error.message + ",\n운동 기록 수정에 실패했습니다.");
    },
  });
}
