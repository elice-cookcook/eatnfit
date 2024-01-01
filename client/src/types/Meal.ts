export interface Meal {
    time: number;
    meal_type: number;
    image_url: string;
    total_kcal: number;
    items: {
        item: string;
        count: number;
        kcal: number;
    }[],
    total_carbohydrate: number,
    total_fat: number,
    total_protein: number,
}
