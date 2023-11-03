import axios from "axios";
import { useQuery } from "react-query";
import { Foods } from "../types";

const getAllFoodNames = async (name: string): Promise<Foods[]> => {
  const response = await axios.get(`/api/v1/foods/?name=${name}`);
  return response.data.data;
};
export function useGetAllFoodNames(name: string) {
  return useQuery("get-one-food", () => getAllFoodNames(name));
}
