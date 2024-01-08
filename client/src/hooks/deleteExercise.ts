import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Exercise } from "../types";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ROUTE } from "../routes/Route";

const deleteExercise = async (exerciseId: string): Promise<Exercise> => {
  const response = await axios.delete(`/api/v1/exercises/?id=${exerciseId}`);
  return response.data;
};

export function useDeleteExercise(exerciseId: string, date: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => deleteExercise(exerciseId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-all-exercise", date]);
      queryClient.invalidateQueries(["get-daily-kcal", date]);

      message.success("운동 기록을 삭제했습니다.");
      navigate(ROUTE.MAIN_PAGE.link);
    },
    onError: (error: Error) => {
      message.error(error.message + ",\n운동 기록 삭제에 실패했습니다.");
    },
  });
}
