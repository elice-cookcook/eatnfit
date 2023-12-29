import { useQueries } from "react-query";
import { getAllMeal } from "./getAllMeal";

export const useGetAllMealByDate = (dates: string[]) => {
  return useQueries(
    dates.map((date) => ({
      queryKey: ["get-all-meal", date],
      queryFn: () => getAllMeal(date),
    }))
  );
};
