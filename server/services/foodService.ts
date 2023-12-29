import { CustomError } from "../interfaces";
import { Food } from "../models";

/** food 추가 */
const addFood = async (
    user_id:string,
    name:string,
    kcal:number,
    carbohydrate:number,
    protein:number,
    fat:number
    ) => {
    try{
        const newFood = { user_id, name, kcal, carbohydrate, protein, fat }
        const check = await Food.findOne({ name, user_id });
        if(check){
            const error:CustomError = {
                message: "이미 존재하는 음식명입니다",
                status: 400
            };
            throw error;
        }
        const addedFood = await Food.create(newFood);

        return addedFood;
    } catch(err) {
        throw (err);
    }
}

/** food 전체 검색 */
const getFood = async ( user_id:string ) => {
    const foodList = await Food.find({ user_id });

    return foodList;
}

const getFoodByName = async (user_id:string, name:string) => {
    const foodList = await Food.find({ user_id, name });

    return foodList;
}

const foodService = {
    addFood,
    getFood,
    getFoodByName,
};

export { foodService }