import axios from "axios";
import { useQuery } from "react-query";
import { Exercise } from "../types";

const getAllExercise = async (date: string): Promise<Exercise[]> => {
  const response = await axios.get(`/api/v1/exercises/${date}`);
  return response.data.data;
};

export function useGetAllExercise(date: string) {
  return useQuery("get-all-exercise", () => getAllExercise(date));
}
