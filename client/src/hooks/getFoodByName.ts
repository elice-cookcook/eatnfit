import { useQueries } from "react-query";
import { getAllFoodNames } from "./getAllRecordFoodNames";
import { FoodRecord } from "../types";

export function useGetFoodByName(names: string[]) {
  const results = useQueries(
    names.map((name) => {
      return {
        queryKey: ["get-food-by-name", name],
        queryFn: () => getAllFoodNames(name),
      };
    })
  );

  const loadedFoods = results
    .filter((result) => result.isSuccess)
    .map((result) => result.data as FoodRecord[]);

  return loadedFoods;
}
