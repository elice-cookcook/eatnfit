import axios from "axios";
import { useMutation } from "react-query";
import { User } from "../types";

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
  return useMutation(() => patchtWeight(currentWeight, targetWeight), {
    onSuccess: () => {
      alert("몸무게를 수정했습니다.");
    },
    onError: (error: Error) => {
      alert(error.message + ",\n몸무게 수정에 실패했습니다.");
    },
  });
};
