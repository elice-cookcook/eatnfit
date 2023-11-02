import { Plan } from "../models";

const getPlan = async ( date: string, user_id: string) => {
    try{
        const numDate = parseInt(date)
        const planList = await Plan.find({ date:numDate, user_id });

        return planList;
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

const planService = {
    getPlan,
};

export { planService }