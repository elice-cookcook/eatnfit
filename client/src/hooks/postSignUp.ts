import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { message } from "antd";
import { ROUTE } from "../routes/Route";

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

  const isErrorData = (data: unknown): data is { message: string } => {
    return data !== null && typeof data === "object" && "message" in data;
  };

  return useMutation(
    () => postSignUp(email, password, name, weight, height, targetWeight),
    {
      onSuccess: () => {
        message.success("회원가입에 성공했습니다. \n로그인을 진행해주세요.");
        navigate(ROUTE.MAIN_PAGE.link);
      },
      onError: (error: AxiosError) => {
        if (error.response && isErrorData(error.response.data)) {
          message.error(error.response.data.message);
        } else {
          message.error("An unknown error occurred");
        }
      },
    }
  );
}
