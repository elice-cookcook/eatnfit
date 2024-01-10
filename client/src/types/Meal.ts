export interface Meal {
  _id: string;
  time: number;
  meal_type: number;
  image_url: string;
  items:
    | {
        item: string;
        count: number;
        kcal: number;
      }[]
    | undefined;
  total_kcal: number;
  total_carbohydrate: number;
  total_fat: number;
  total_protein: number;
}

export type MealContent = Omit<Meal, "_id">;
