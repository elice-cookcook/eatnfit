export interface Meal {
  _id: string;
  date: string;
  user_id: string;
  time: number;
  meal_type: number;
  image_url: string;
  items: {
    _id: string;
    item: string;
    count: number;
    kcal: number;
  }[];
  total_kcal: number;
  total_carbohydrate: number;
  total_fat: number;
  total_protein: number;
}
