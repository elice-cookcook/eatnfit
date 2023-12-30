import { Request, Response, NextFunction } from 'express';
import { planService } from '../services/planService';

const planTest = (req:Request, res:Response, next:NextFunction) => {
    res.send('plan');
}

const getPlan = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
    try{
        const planList = await planService.getPlan(parseInt(date), user_id);

        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);

        res.status(200).json({
            message:`${year}년 ${month}월 ${day}일 계획 조회 결과입니다`,
            data:planList
        });
    } catch(err) {
        next(err);
    }
}

const addPlan = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
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

const setPlan = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { id } = req.query;
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { content, isComplete } = req.body;

        const changedPlan = await planService.setPlan(
            id as string,
            parseInt(date),
            user_id,
            content,
            parseInt(isComplete)
        );
        res.status(200).json({
            message:'계획이 변경되었습니다',
            data:changedPlan
        })
    } catch(err) {
        next(err);
    }
}

const deletePlan = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { id } = req.query;
        const deletedPlan = await planService.deletePlan( id as string );

        res.status(200).json({
            message:'계획이 삭제되었습니다',
            data:deletedPlan
        })
    } catch(err) {
        next(err);
    }
}

const planController = {
    planTest,
    getPlan,
    addPlan,
    setPlan,
    deletePlan,
};

export { planController }