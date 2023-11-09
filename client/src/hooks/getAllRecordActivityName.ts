import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Activity } from "../types";
import { getAllActivity } from "./getAllActivity";

export const getAllActivityNames = async (
  name: string
): Promise<Activity[]> => {
  const response = await axios.get(`/api/v1/exercises/activity/${name}`);
  return response.data.data;
};

export function useSearchActivityNames(name: string) {
  return useQuery(["get-one-activity", name], () => getAllActivityNames(name), {
    enabled: !!name,
  });
}

// 전체 data 다시 불러오기 hook
export function useRefreshAllACtivity() {
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const data: Activity[] = await getAllActivity();
      queryClient.setQueryData("get-all-activity", data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("get-all-activity");
      },
    }
  );
}
