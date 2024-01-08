import { message } from "antd";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";

const deleteMeal = async (id: string) => {
  const response = await axios.delete(`/api/v1/meals/?id=${id}`);
  return response.data;
};

export function useDeleteMeal(id: string, date: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(() => deleteMeal(id), {
    onSuccess: (response) => {
      message.success(response.message);
      navigate(ROUTE.MAIN_PAGE.link);
      queryClient.invalidateQueries(["get-all-meal", date]);
      queryClient.invalidateQueries(["get-daily-kcal", date]);
    },
    onError: (error: Error) => {
      message.error(error.message);
    },
  });
}
