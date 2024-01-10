import axios from "axios";
import { useQuery } from "react-query";
import { Meal } from "../types";

export const getAllMeal = async (date: string): Promise<Meal[]> => {
  const response = await axios.get(`/api/v1/meals/${date}`);
  return response.data.data;
};

export function useGetAllMeal(date: string) {
  return useQuery({
    queryKey: ["get-all-meal", date],
    queryFn: () => getAllMeal(date),
  });
}
