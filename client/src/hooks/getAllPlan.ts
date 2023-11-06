import axios from 'axios';
import { useQuery } from 'react-query';
import { Plan } from '../types';

const getAllPlan = async (date: string): Promise<Plan[]> => {
	const response = await axios.get(
		`/api/v1/plans/${date}`
	);
	return response.data.data;
};
export function useGetAllPlan(date: string) {
	return useQuery("get-all-plan", () => getAllPlan(date));
}
