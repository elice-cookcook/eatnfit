import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Meal } from "../types";
import { ROUTE } from "../routes/Route";

const postMeal = async (date: string, meal: Meal): Promise<Meal> => {
  const response = await axios.post(`/api/v1/meals/${date}`, meal, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
export function usePostMeal(date: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation((meal: Meal) => postMeal(date, meal), {
    onSuccess: () => {
      message.success("식단 추가에 성공하였습니다.");
      navigate(ROUTE.MAIN_PAGE.link);
      queryClient.invalidateQueries(["get-all-meal", date]);
      queryClient.invalidateQueries(["get-daily-kcal", date]);
    },
    onError: () => {
      message.error("식단 추가에 실패하였습니다.");
    },
  });
}
