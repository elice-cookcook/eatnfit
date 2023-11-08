import { User } from "../models";
import { CustomError } from "../interfaces";

const addUser = async ( 
    name:string,
    email:string,
    password:string,
    height:number,
    weight:number,
    targetWeight:number) => {
        try{
            const check = User.find({ email });
            if(check){
                const err:CustomError = {
                    message: "이미 존재하는 이메일입니다",
                    status: 400
                };
                throw err;
            }
            const newUser = await User.create({
                name,
                email,
                password,
                height,
                weight,
                target_weight:targetWeight
            });

            return newUser;
        } catch(err) {
            throw(err);
        }
    }

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

const userLogin = async ( email:string, password:string ) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            const err:CustomError = {
                message:"존재하지 않는 이메일입니다",
                status: 400
            };
            throw err;
        }
        if(user.password !== password){
            const err:CustomError = {
                message:"비밀번호가 틀렸습니다",
                status: 400
            }
            throw err;
        }else{
            return user._id;
        }
    } catch(err) {
        throw(err);
    }
}

const loginCheck = async ( userId:string ) => {
    try{
        const check = await User.findOne({ _id:userId })
        if(check){
            return true;
        }else{
            return false;
        }
    } catch(err) {
        throw err;
    }
}

const userService = {
    setUser,
    addUser,
    userLogin,
    loginCheck
};

export { userService }