import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Meal, MealContent } from "../types";

const patchMeal = async (
  date: string,
  id: string,
  meal: MealContent
): Promise<Meal> => {
  const response = await axios.patch(`/api/v1/meals/${date}?id=${id}`, meal);
  return response.data;
};
export function usePatchMeal(date: string, id: string, meal: MealContent) {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => patchMeal(date, id, meal), {
    onSuccess: () => {
      alert("식단이 수정되었습니다.");
      queryClient.invalidateQueries(["get-all-meal", date]);
      nav("/main");
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });
}
