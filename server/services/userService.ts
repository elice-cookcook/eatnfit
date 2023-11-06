import { User } from "../models";

const setUser = async ( user_id: string, weight:number, targetWeight:number ) => {
    try{
        const query = { _id:user_id };
        const check = await User.find(query);
        if(!check){
            throw new Error('존재하지 않는 유저ID입니다');
        }
        const newUser = await User.findOneAndUpdate(
            query,
            { weight, target_weight:targetWeight },
            { new: true });

        return newUser;

    } catch (err) {
        throw Error(err);
    }
}

const userService = {
    setUser,
};

export { userService }