import { Request, Response, NextFunction } from 'express';
import { mealService } from '../services/mealService';

import getImageURL from '../utils/image-to-url';

const mealTest = (req:Request, res:Response, next:NextFunction) => {
    res.send('meal');
}

const getMeal = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { date } = req.params;
        const user_id = '6540b2ea7d273f89dc3b1a15';

        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);

        const mealList = await mealService.getMeal(date, user_id);
        res.status(200).json({
            message:`${year}년 ${month}월 ${day}일 식단 조회 결과입니다`,
            data:mealList
        });
    } catch(err) {
        next(err);
    }
}

const addMeal = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const image_url = await getImageURL(req);
        const { date } = req.params;
        const user_id = '6540b2ea7d273f89dc3b1a15';
        const { 
            time,
            meal_type,
            total_kcal,
            total_carbohydrate,
            total_protein,
            total_fat,
            items } = req.body;
        const addedMeal = await mealService.addMeal(
            parseInt(date),
            user_id,
            parseInt(time),
            parseInt(meal_type),
            image_url,
            Number(total_kcal),
            Number(total_carbohydrate),
            Number(total_protein),
            Number(total_fat),
            JSON.parse(items)
        );
        res.status(201).json({
            message:'식단이 추가되었습니다',
            data:addedMeal
        });
    } catch(err) {
        next(err);
    }
}

const mealController = {
    mealTest,
    getMeal,
    addMeal,
};

export { mealController }