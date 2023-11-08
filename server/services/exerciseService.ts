import { CustomError } from "../interfaces";
import { Exercise } from "../models";
import { Activity } from "../models";

const getExercise = async ( date:string, user_id: string) => {
    try{
        const numDate = parseInt(date);
        const exerciseList = await Exercise.find({ date:numDate, user_id });

        return exerciseList;
    } catch (err) {
        throw Error(err);
    }
}

const addExercise = async (
    date:number,
    user_id: string,
    name: string,
    exercise_type:number,
    exercise_part:number,
    strength:number,
    time: number,
    kcal:number) => {
        try{
            const newExercise = { 
                date, 
                user_id, 
                name, 
                exercise_type, 
                exercise_part,
                strength,
                time,
                kcal
            }
            
            const addedExercise = await Exercise.create(newExercise);

            return addedExercise;
        } catch(err) {
            throw Error(err);
        }
}

const getActivity = async () => {
    try{
        const activityList = await Activity.find({});

        return activityList;
    } catch(err) {
        throw err;
    }
}

const getActivityByName = async (name:string) => {
    try{
        const activityList = await Activity.findOne( { name } );

        return activityList;
    } catch(err) {
        throw err;
    }
}

const addActivity = async ( name: string, kcal: number ) => {
    try{
        const minKcal = kcal/30;
        const newActivity = {
            name,
            kcal: minKcal.toFixed(2)
        };

        const check = await Activity.findOne({ name });
        if(check) {
            const error:CustomError = {
                message: "이미 존재하는 운동명입니다",
                status: 400
            };
            throw error;
        }

        const addedActivity = await Activity.create(newActivity);

        return addedActivity;
    } catch(err) {
        throw err;
    }
}

const exerciseService = {
    getExercise,
    addExercise,
    getActivity,
    getActivityByName,
    addActivity,
};

export { exerciseService }