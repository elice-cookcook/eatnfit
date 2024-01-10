import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../types";
import { message } from "antd";

const getUserInfo = async (): Promise<User> => {
  const response = await axios.get(`/api/v1/users`);
  if (response) return response.data.data;
  else throw new Error("An unkown error ocurred");
};
export function useGetUserInfo() {
  return useQuery(["get-user-info"], () => getUserInfo(), {
    onError: () => {
      message.error("로그인이 필요합니다.");
    },
  });
}
