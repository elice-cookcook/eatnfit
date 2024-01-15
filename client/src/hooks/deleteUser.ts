import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { message } from "antd";

const deleteUser = async (userId: string) => {
  const response = await axios.delete(`/api/v1/users/${userId}`);
  if (response) return response;
};

export function useDeleteUser(userId: string) {
  const isErrorData = (data: unknown): data is { message: string } => {
    return typeof data === "object" && data !== null && "message" in data;
  };

  return useMutation(() => deleteUser(userId), {
    onError: (error: AxiosError) => {
      if (error.response && isErrorData(error?.response?.data)) {
        message.error(error?.response?.data?.message);
      }
    },
  });
}
