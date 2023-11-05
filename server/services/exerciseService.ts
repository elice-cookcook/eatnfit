import { Exercise } from "../models";

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

const exerciseService = {
    getExercise,
    addExercise,
};

export { exerciseService }