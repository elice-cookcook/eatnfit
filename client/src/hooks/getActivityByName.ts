import axios from "axios";
import { useQuery } from "react-query";
import { Activity } from "../types";

const getActivityByName = async (activityName: string): Promise<Activity> => {
  const response = await axios.get(
    `/api/v1/exercises/activity/${activityName}`
  );

  return response.data.data[0];
};

export function useGetActivityByName(activityName: string) {
  return useQuery("get-activity-by-name", () =>
    getActivityByName(activityName)
  );
}
