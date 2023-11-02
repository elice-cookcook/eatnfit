import { Request, Response, NextFunction } from 'express';
import { mealService } from '../services/mealService';

const mealTest = (req:Request, res:Response, next:NextFunction) => {
    res.send('meal');
}

const getMeal = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = '6540b2ea7d273f89dc3b1a15';
    try{
        const mealList = await mealService.getMeal(date, user_id);
        res.json(mealList);
    } catch(err) {
        console.log(err);
        throw Error(err);
    }
}

const mealController = {
    mealTest,
    getMeal,
};

export { mealController }