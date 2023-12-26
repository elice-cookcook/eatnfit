import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

interface ApiResponse {
  message: string;
  data: User;
}

const postSignUp = async (
  email: string,
  password: string,
  name: string,
  height: number,
  weight: number,
  targetWeight: number
): Promise<ApiResponse> => {
  const response = await axios.post(`/api/v1/users/signup`, {
    email,
    password,
    name,
    height,
    weight,
    targetWeight,
  });
  return response.data;
};

export function usePostSignUp(
  email: string,
  password: string,
  name: string,
  height: number,
  weight: number,
  targetWeight: number
) {
  const navigate = useNavigate();

  const isErrorData = (data: any): data is { message: string } => {
    return data && typeof data === "object" && "message" in data;
  };

  return useMutation(
    () => postSignUp(email, password, name, weight, height, targetWeight),
    {
      onSuccess: () => {
        alert(
          `환영합니다. 회원가입에 성공했습니다.\n로그인페이지로 이동합니다.`
        );
        navigate("/login");
      },
      onError: (error: AxiosError) => {
        if (error.response && isErrorData(error.response.data)) {
          alert(error.response.data.message);
        } else {
          alert("An unknown error occurred");
        }
      },
    }
  );
}
