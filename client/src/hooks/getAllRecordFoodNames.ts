import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Foods } from "../types";
import { getAllFoods } from "./getAllRecordFoods";

export const getAllFoodNames = async (name: string): Promise<Foods[]> => {
  const response = await axios.get(`/api/v1/foods/?name=${name}`);
  return response.data.data;
};

export function useSearchFoodNames(name: string) {
  return useQuery(["get-one-food", name], () => getAllFoodNames(name), {
    enabled: !!name,
  });
}

// 전체 data 다시 불러오기 hook
export function useRefreshAllFoods() {
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const data: Foods[] = await getAllFoods();
      queryClient.setQueryData("get-all-foods", data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("get-all-foods");
      },
    }
  );
}
