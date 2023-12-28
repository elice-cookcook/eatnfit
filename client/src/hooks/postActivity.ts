import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { AddActivity, Error } from "../types";
import { message } from "antd";

const postActivity = async (data: AddActivity) => {
  const response = await axios.post(`/api/v1/exercises/activity/`, data);
  return response.data;
};

export function usePostActivity(data: AddActivity) {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation(() => postActivity(data), {
    onSuccess: (response) => {
      message.success(response.message);
      nav("/exerciserecord/search"); // 검색 페이지로 이동
      queryClient.invalidateQueries("get-all-activity");
    },
    onError: (error: Error) => {
      message.error(error.response?.data.message);
    },
  });
}
