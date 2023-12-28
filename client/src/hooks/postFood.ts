import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { AddFood, Error } from "../types";
import { message } from "antd";

const postFood = async (data: AddFood) => {
  const response = await axios.post("/api/v1/foods/", data);
  return response.data;
};

export function usePostFood(data: AddFood) {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation(() => postFood(data), {
    onSuccess: (response) => {
      message.success(response.message);
      nav("/foodrecord/search"); // 검색 페이지로 이동
      queryClient.invalidateQueries("get-all-foods");
    },
    onError: (error: Error) => {
      message.error(error.response?.data.message);
    },
  });
}
