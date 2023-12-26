import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../utils";

const postLogin = async (email: string, password: string): Promise<string> => {
  const response = await axios.post(`/api/v1/users/login`, { email, password });
  return response.data;
};

export function usePostLogin(email: string, password: string) {
  const navigate = useNavigate();

  const isErrorData = (data: unknown): data is { message: string } => {
    return typeof data === "object" && data !== null && "message" in data;
  };

  return useMutation(() => postLogin(email, password), {
    onSuccess: () => {
      showMessage("로그인에 성공했습니다.");
      navigate("/main");
    },

    onError: (error: AxiosError) => {
      if (error.response && isErrorData(error?.response?.data)) {
        showMessage(error?.response?.data?.message, "error");
      } else {
        showMessage("An unknown error occurred", "error");
      }
    },
  });
}
