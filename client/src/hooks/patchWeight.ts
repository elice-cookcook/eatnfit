import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { User } from "../types";
import { message } from "antd";

const patchtWeight = async (
  currentWeight: number,
  targetWeight: number
): Promise<User> => {
  const response = await axios.patch(
    `/api/v1/users/?weight=${currentWeight}&targetWeight=${targetWeight}`
  );
  return response.data;
};

export const usePatchWeight = (currentWeight: number, targetWeight: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => patchtWeight(currentWeight, targetWeight), {
    onSuccess: () => {
      message.success("몸무게를 수정했습니다.");
      queryClient.invalidateQueries(["get-user-info"]);
    },
    onError: (error: Error) => {
      message.error(error.message + ",\n몸무게 수정에 실패했습니다.");
    },
  });
};
