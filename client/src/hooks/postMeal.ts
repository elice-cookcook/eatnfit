import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { MealContent } from "../types";
import { ROUTE } from "../routes/Route";

const postMeal = async (date: string, meal: MealContent) => {
  try {
    const response = await axios.post(`/api/v1/meals/${date}`, meal, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.data != undefined) return response.data;
  } catch (e) {
    console.error;
  }
};

export function usePostMeal(date: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation((meal: MealContent) => postMeal(date, meal), {
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
