import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Plan, PlanContent } from "../types";
import { message } from "antd";

const patchPlan = async (
  date: string,
  id: string | undefined,
  plan: PlanContent
): Promise<Plan> => {
  const response = await axios.patch(`/api/v1/plans/${date}?id=${id}`, plan);
  return response.data;
};
export function usePatchPlan(
  date: string,
  id: string | undefined,
  plan: PlanContent
) {
  const queryClient = useQueryClient();
  return useMutation(() => patchPlan(date, id, plan), {
    onSuccess: () => {
      queryClient.invalidateQueries("get-all-plan");
    },
    onError: (error: AxiosError) => {
      message.error(error.toString());
    },
  });
}
