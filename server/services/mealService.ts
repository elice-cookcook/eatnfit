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

const mealService = {
    getMeal,
};

export { mealService }