import { Request, Response, NextFunction } from 'express';
import { exerciseService } from '../services/exerciseService';

const exerciseTest = (req:Request, res:Response, next:NextFunction) => {
    console.log('exercise');
}

const getExercise = async (req:Request, res:Response, next:NextFunction) => {
    const { date } = req.params;
    const user_id = '6540b2ea7d273f89dc3b1a15';
    try{
        const exerciseList = await exerciseService.getExercise(date, user_id);
        res.json(exerciseList);
    } catch(err) {
        console.log(err);
        throw Error(err);
    }
}

const exerciseController = {
    exerciseTest,
    getExercise,
};

export { exerciseController }