import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../types";

const getUserInfo = async (): Promise<User> => {
  const response = await axios.get(`/api/v1/users`);
  return response.data.data;
};
export function useGetUserInfo() {
  return useQuery(["get-user-info"], () => getUserInfo());
}
