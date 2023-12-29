import axios from "axios";
import { useQuery } from "react-query";
import { Foods } from "../types";

export const getAllFoodNames = async (name: string): Promise<Foods[]> => {
  const response = await axios.get(`/api/v1/foods/?name=${name}`);
  return response.data.data;
};

export function useSearchFoodNames(name: string) {
  return useQuery(
    ["get-one-food", name],
    ({ queryKey }) => getAllFoodNames(queryKey[1]),
    { enabled: !!name }
  );
}
