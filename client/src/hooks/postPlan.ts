import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Plan, PlanContent } from '../types';

const postPlan = async (date: string, plan: PlanContent): Promise<Plan> => {
	const response = await axios.post(
		`/api/v1/plans/${date}`, plan
	);
	return response.data;
};
export function usePostPlan(date: string, plan: PlanContent) {
    const queryClient = useQueryClient();
    return useMutation(() => postPlan(date, plan), {
        onSuccess: () => {
        queryClient.invalidateQueries("get-all-plan");
    }});
}
