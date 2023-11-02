import { Request, Response, NextFunction } from 'express';
import { planService } from '../services/planService';

const planTest = (req:Request, res:Response, next:NextFunction) => {
    res.send('plan');
}

const getPlan = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = '6540b2ea7d273f89dc3b1a15';
    try{
        const planList = await planService.getPlan(parseInt(date), user_id);
        res.json(planList);
    } catch(err) {
        next(err);
    }
}

const addPlan = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = '6540b2ea7d273f89dc3b1a15';
    try{
        const { content, isComplete } = req.body;
        if(!content || !isComplete){
            throw new Error('누락된 데이터가 있습니다')
        }
        const addedPlan = await planService.addPlan(
            parseInt(date),
            user_id,
            content,
            parseInt(isComplete)
        );
        
        res.status(201).json({
            message:'계획이 추가되었습니다',
            data:addedPlan
        })
    } catch(err) {
        next(err);
    }
}

const planController = {
    planTest,
    getPlan,
    addPlan,
};

export { planController }