export interface Plan {
  _id: string;
  date: number;
  user_id: string;
  content: string;
  isComplete: number;
}

export type PlanContent = Pick<Plan, "content" | "isComplete">;
