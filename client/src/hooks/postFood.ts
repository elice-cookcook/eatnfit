import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { AddFood } from "../types";

const postFood = async (data: AddFood) => {
  const { data: response } = await axios.post("/api/v1/foods/", data);
  return response.data.data;
};

export function usePostFood() {
  const queryClient = useQueryClient();
  return useMutation(postFood, {
    onSuccess: () => {
      queryClient.invalidateQueries("food");
    },
    onError: () => {
      alert("there was an error");
    },
  });
}
