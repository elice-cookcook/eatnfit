import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types";
import { ROUTE } from "../routes/Route";
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
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(() => patchMeal(date, id, meal), {
    onSuccess: () => {
      message.success("식단이 수정되었습니다.");
      navigate(ROUTE.MAIN_PAGE.link);
      queryClient.invalidateQueries(["get-all-meal", date]);
      queryClient.invalidateQueries(["get-daily-kcal", date]);
    },
    onError: (error: Error) => {
      message.error(error.message);
    },
  });
}
