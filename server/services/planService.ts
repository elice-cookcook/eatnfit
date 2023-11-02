import { Plan } from "../models";

const getPlan = async ( date: number, user_id: string) => {
    try{
        const planList = await Plan.find({ date, user_id });

        return planList;
    } catch (err) {
        throw Error(err);
    }
}

const addPlan = async (
    date: number,
    user_id: string,
    content: string,
    isComplete:number) => {
    try{
        const newPlan = {
            date,
            user_id,
            content,
            isComplete
        }
        const addedPlan = await Plan.create(newPlan);
        
        return addedPlan;
    } catch(err) {
        throw Error(err);
    }
}

const planService = {
    getPlan,
    addPlan,
};

export { planService }