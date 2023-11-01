import { Exercise } from "../models";

const getExercise = async ( date:string, user_id: string) => {
    try{
        const numDate = parseInt(date);
        const exerciseList = await Exercise.find({ date:numDate, user_id });

        return exerciseList;
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

const exerciseService = {
    getExercise,
};

export { exerciseService }