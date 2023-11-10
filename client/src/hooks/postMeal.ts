import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Meal } from '../types';

const postMeal = async (date: string, meal: Meal): Promise<Meal> => {
	const response = await axios.post(
		`/api/v1/meals/${date}`, meal
	);
	return response.data;
};
export function usePostMeal(date: string, meal: Meal) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation(() => postMeal(date, meal), {
        onSuccess: () => {
        navigate('/main');
        queryClient.invalidateQueries("get-all-meal");
    }});
}
