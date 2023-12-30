import { Request, Response, NextFunction } from 'express';
import { exerciseService } from '../services/exerciseService';

const getExercise = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { date } = req.params;

        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;

        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);

        const { exerciseList ,dayComsumedKcal } = await exerciseService.getExercise(date, user_id);
        res.status(200).json({
            message:`${year}년 ${month}월 ${day}일 운동기록 조회 결과입니다`,
            data:exerciseList,
            dayComsumedKcal
        });
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
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { date } = req.params;

        if (
            !date ||
            !name ||
            (!exercise_type && parseInt(exercise_type) !== 0) ||
            (!exercise_part && parseInt(exercise_part) !== 0) ||
            (!strength && parseInt(strength) !== 0) ||
            (!time && Number(time) !== 0)||
            (!kcal && Number(kcal) !== 0)) {
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

const setExercise = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { 
            name,
            exercise_type,
            exercise_part,
            strength,
            time,
            kcal
        } = req.body;
        const { id } = req.query;
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;

        if (
            !id ||
            !date ||
            !name ||
            (!exercise_type && parseInt(exercise_type) !== 0) ||
            (!exercise_part && parseInt(exercise_part) !== 0) ||
            (!strength && parseInt(strength) !== 0) ||
            (!time && Number(time) !== 0)||
            (!kcal && Number(kcal) !== 0)) {
            throw new Error('누락된 데이터가 있습니다');
        }

        const changedExercise = await exerciseService.setExercise(
            id as string,
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
            message:"운동 기록이 수정되었습니다",
            data:changedExercise
        })
    } catch(err) {
        next(err);
    }
}

const deleteExercise = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { id } = req.query;
        
        const deletedExercise = await exerciseService.deleteExercise(id as string);

        res.status(200).json({
            message:"운동 기록이 삭제되었습니다",
            data:deletedExercise
        })
    } catch(err) {
        next(err);
    }
}

const addActivity = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { name, kcal } = req.body;

        const addedActivity = await exerciseService.addActivity(`${name}`,Number(kcal));

        res.status(201).json({
            message:"운동이 추가되었습니다",
            data:addedActivity
        });
    } catch(err) {
        next(err);
    }
}

const getActivity = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const activityList = await exerciseService.getActivity();

        res.status(200).json({
            message:"전체 운동 목록 입니다",
            data:activityList
        })
    } catch(err) {
        next(err);
    }
}

const getActivityByName = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { name } = req.params;
        const activityList = await exerciseService.getActivityByName(name as string);

        res.status(200).json({
            message:`${name} 검색 결과 입니다`,
            data:activityList || []
        })
    } catch(err) {
        next(err);
    }
}

const exerciseController = {
    getExercise,
    setExercise,
    addExercise,
    deleteExercise,
    getActivity,
    getActivityByName,
    addActivity,
};

export { exerciseController }