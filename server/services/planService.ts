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
        throw err;
    }
}

const setPlan = async (
    id: string,
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
            const changedPlan = await Plan.findOneAndUpdate(
                {_id:id},
                newPlan,
                { new: true }
            )
            return changedPlan;
        } catch(err) {
            throw err;
        }
}

const deletePlan = async (id:string) => {
    try{
        const deletedPlan = await Plan.findOneAndDelete(
            {_id:id},
            { returnDocument: 'before' });

        return deletedPlan;
    } catch(err) {
        throw err;
    }
}

const deletePlanByUserId = async ( userId:string ) => {
    try{
        await Plan.findOneAndDelete({user_id:userId});

        return;
    } catch(err) {
        throw err;
    }
}

const planService = {
    getPlan,
    addPlan,
    setPlan,
    deletePlan,
    deletePlanByUserId,
};

export { planService }