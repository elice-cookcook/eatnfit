import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Plan } from "../types";
import { message } from "antd";

const deletePlan = async (id: string | undefined): Promise<Plan> => {
  const response = await axios.delete(`/api/v1/plans/?id=${id}`);
  return response.data;
};
export function useDeletePlan(id: string | undefined, date: string) {
  const queryClient = useQueryClient();
  return useMutation(() => deletePlan(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-all-plan", date]);
    },
    onError: (error: AxiosError) => {
      message.error(error.toString());
    },
  });
}
