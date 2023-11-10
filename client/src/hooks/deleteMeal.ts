import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteMeal = async (id: string) => {
  const response = await axios.delete(`/api/v1/meals/?id=${id}`);
  return response.data;
};

export function useDeleteMeal(id: string) {
  const queryClient = useQueryClient();
  return useMutation(() => deleteMeal(id), {
    onSuccess: (response) => {
      alert(response.message);
      queryClient.invalidateQueries("get-all-meal");
    },
    onError: (error: Error) => {
      alert(error);
    },
  });
}
