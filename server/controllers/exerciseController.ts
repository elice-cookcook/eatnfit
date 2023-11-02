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
        next(err);
    }
}

const addExercise = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { 
            name,
            exercise_type,
            exercise_part,
            strength,
            time,
            kcal
        } = req.body;
        const user_id = '6540b2ea7d273f89dc3b1a15';
        const { date } = req.params

        if (!date || !name || !exercise_type || !exercise_part || !strength || !time || !kcal) {
            throw new Error('누락된 데이터가 있습니다');
        }
    
        const addedExercise = await exerciseService.addExercise(
            parseInt(date),
            user_id,
            name,
            parseInt(exercise_type),
            parseInt(exercise_part),
            parseInt(strength),
            parseInt(time),
            Number(kcal)
        )

        res.status(201).json({
            message:"운동 기록이 추가되었습니다",
            data:addedExercise
        })
    } catch(err) {
        next(err);
    }
}

const exerciseController = {
    exerciseTest,
    getExercise,
    addExercise,
};

export { exerciseController }