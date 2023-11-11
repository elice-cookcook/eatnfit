import axios from 'axios';
import { useMutation } from 'react-query';
import { Plan, PlanContent } from '../types';

const patchPlan = async (date: string, id: string | undefined, plan: PlanContent): Promise<Plan> => {
	const response = await axios.patch(
		`/api/v1/plans/${date}?id=${id}`, plan
	);
	return response.data;
};
export function usePatchPlan(date: string, id: string | undefined, plan: PlanContent) {
    return useMutation(() => patchPlan(date, id, plan));
}
