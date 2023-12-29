import { useQueries } from "react-query";
import { getAllExercise } from "./getAllExercise";

export const useGetAllExerciseByDate = (dates: string[]) => {
  return useQueries(
    dates.map((date) => ({
      queryKey: ["get-all-exercise", date],
      queryFn: () => getAllExercise(date),
    }))
  );
};
