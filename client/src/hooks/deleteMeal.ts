import { message } from "antd";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const deleteMeal = async (id: string) => {
  const response = await axios.delete(`/api/v1/meals/?id=${id}`);
  return response.data;
};

export function useDeleteMeal(id: string) {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation(() => deleteMeal(id), {
    onSuccess: (response) => {
      message.success(response.message);
      nav("/main");
      queryClient.invalidateQueries("get-all-meal");
    },
    onError: () => {
      message.error("식단 삭제에 실패했습니다.");
    },
  });
}
