import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types";
import { message } from "antd";

const patchMeal = async (
  date: string,
  id: string,
  meal: Meal
): Promise<Meal> => {
  const response = await axios.patch(`/api/v1/meals/${date}?id=${id}`, meal);
  return response.data;
};
export function usePatchMeal(date: string, id: string, meal: Meal) {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => patchMeal(date, id, meal), {
    onSuccess: () => {
      message.success("식단이 수정되었습니다.");
      nav("/main");
      queryClient.invalidateQueries(["get-all-meal", date]);
    },
    onError: (error: Error) => {
      message.error(error.message);
    },
  });
}
