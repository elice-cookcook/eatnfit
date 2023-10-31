import { Request, Response, NextFunction } from 'express';
import { planService } from '../services/planService';

const planTest = (req:Request, res:Response, next:NextFunction) => {
    res.send('plan');
}

const getPlan = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = '6540b2ea7d273f89dc3b1a15';
    try{
        const planList = await planService.getPlan(date, user_id);
        res.json(planList);
    } catch(err) {
        console.log(err);
        throw Error(err);
    }
}

const planController = {
    planTest,
    getPlan,
};

export { planController }