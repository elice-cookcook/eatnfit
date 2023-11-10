import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { AddActivity, Error } from "../types";

const postActivity = async (data: AddActivity) => {
  const response = await axios.post(`/api/v1/exercises/activity/`, data);
  return response.data;
};

export function usePostActivity(data: AddActivity) {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation(() => postActivity(data), {
    onSuccess: (response) => {
      alert(response.message);
      nav("/exerciserecord/search"); // 검색 페이지로 이동
      queryClient.invalidateQueries("get-all-activity");
    },
    onError: (error: Error) => {
      alert(error.response?.data.message);
    },
  });
}
