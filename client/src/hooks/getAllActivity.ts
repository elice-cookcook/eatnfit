import axios from "axios";
import { useQuery } from "react-query";
import { Activity } from "../types";

const getAllActivity = async (): Promise<Activity[]> => {
  const response = await axios.get(`/api/v1/exercises/activity/`);
  return response.data.data;
};

export function useGetAllActivity() {
  return useQuery("get-all-activity", () => getAllActivity());
}
