import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { User } from "../types";
import { message } from "antd";

const patchtUserInfo = async (
  name: string,
  height: number,
  currentWeight: number,
  targetWeight: number
): Promise<User> => {
  const response = await axios.patch(`/api/v1/users`, {
    weight: currentWeight,
    targetWeight: targetWeight,
    name: name,
    height: height,
  });
  return response.data;
};

export const usePatchUserInfo = (
  name: string,
  height: number,
  currentWeight: number,
  targetWeight: number
) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => patchtUserInfo(name, height, currentWeight, targetWeight),
    {
      onSuccess: () => {
        message.success("회원정보가 수정되었습니다.");
        queryClient.invalidateQueries(["get-user-info"]);
      },
      onError: (error: Error) => {
        message.error(error.message + ",\n회원정보 수정에 실패했습니다.");
      },
    }
  );
};
