import axios from "axios";
import { useQuery } from "react-query";
import { Activity } from "../types";

export const getAllActivityNames = async (
  name: string
): Promise<Activity[]> => {
  const response = await axios.get(`/api/v1/exercises/activity/${name}`);
  return response.data.data;
};

export function useSearchActivityNames(name: string) {
  return useQuery(
    ["get-one-activity", name],
    ({ queryKey }) => getAllActivityNames(queryKey[1]),
    { enabled: !!name }
  );
}
