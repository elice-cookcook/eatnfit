export interface MealContent {
  time: number;
  meal_type: number;
  image: string;
  total_kcal: number;
  total_carbohydrate: number;
  total_fat: number;
  total_protein: number;
  items: [
    {
      item: string;
      count: number;
      kcal: number;
    },
  ];
}
