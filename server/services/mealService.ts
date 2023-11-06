import { Meal } from "../models";

const getMeal = async ( date:string, user_id: string) => {
    try{
        const numDate = parseInt(date);
        const mealList = await Meal.find({ date:numDate, user_id });

        return mealList;
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

const addMeal = async (
    date:number,
    user_id:string,
    time:number,
    meal_type:number,
    image_url:string,
    total_kcal:number,
    total_carbohydrate:number,
    total_protein:number,
    total_fat:number,
    items:Array<object>
) => {
    try{
        const newMeal = { 
            date, 
            user_id, 
            time, 
            meal_type, 
            image_url,
            total_kcal,
            total_carbohydrate,
            total_protein,
            total_fat,
            items
        }
        
        const addedMeal = await Meal.create(newMeal);
        
        return addedMeal;
    } catch(err) {
        throw Error(err);
    }
}

const mealService = {
    getMeal,
    addMeal,
};

export { mealService }