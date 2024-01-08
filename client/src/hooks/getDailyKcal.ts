import { useQuery } from "react-query";
import axios from "axios";

type dailyKcal = {
  dayKcal: number;
  dayComsumedKcal: number;
};

export const getDailyKcal = async (date: string): Promise<dailyKcal> => {
  const response = await axios.get(`/api/v1/exercises/kcal/${date}`);
  return response.data.data;
};

export function useGetDailyKcal(date: string) {
  return useQuery(["get-daily-kcal", date], () => getDailyKcal(date));
}
