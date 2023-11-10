import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types";

const patchMeal = async (date: string, id: string): Promise<Meal> => {
  const response = await axios.patch(`/api/v1/meals/${date}?id=${id}`);
  return response.data;
};
export function usePatchMeal(date: string, id: string) {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => patchMeal(date, id), {
    onSuccess: () => {
      alert("식단이 수정되었습니다.");
      nav("/main");
      queryClient.invalidateQueries("get-all-meal");
    },
    onError: (error: Error) => {
      alert(error);
    },
  });
}
