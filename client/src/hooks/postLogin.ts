import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const postLogin = async (email: string, password: string): Promise<string> => {
  const response = await axios.post(`/api/v1/users/login`, { email, password });
  return response.data;
};

export function usePostLogin(email: string, password: string) {
  const navigate = useNavigate();

  const isErrorData = (data: any): data is { message: string } => {
    return data && typeof data === "object" && "message" in data;
  };

  return useMutation(() => postLogin(email, password), {
    onSuccess: () => {
      alert("로그인 성공");
      navigate("/main");
    },
    onError: (error: AxiosError) => {
      if (error.response && isErrorData(error.response.data)) {
        alert(error.response.data.message);
      } else {
        alert("An unknown error occurred");
      }
    },
  });
}
