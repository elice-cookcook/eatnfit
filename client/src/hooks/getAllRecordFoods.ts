import axios from "axios";
import { useQuery } from "react-query";
import { Foods } from "../types";

export const getAllFoods = async (): Promise<Foods[]> => {
  const response = await axios.get(`/api/v1/foods`);
  return response.data.data;
};

export function useGetAllFoods() {
  return useQuery("get-all-foods", () => getAllFoods());
}
