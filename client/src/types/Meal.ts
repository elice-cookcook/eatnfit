export interface Meal {
    _id: string;
    date: number;
    user_id: string;
    time: number;
    meal_type: number;
    image_url: string;
    total_kcal: number;
    items: {
        _id: string;
        count: number;
    }
}