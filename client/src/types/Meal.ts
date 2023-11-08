export interface Meal {
    _id: string;
    date: number;
    user_id: string;
    time: number;
    meal_type: number;
    image_url: string;
    total_kcal: number;
    items: [{
        _id: string;
        item: string;
        count: number;
        kcal: number;
    }],
    total_carbohydrate: number,
    total_fat: number,
    total_protein: number,
}
