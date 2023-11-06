import { Request, Response, NextFunction } from "express";
import { userService } from '../services/userService';

const userTest = (req:Request, res:Response, next:NextFunction) => {
    console.log('user');
}

const setUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { weight, targetWeight } = req.query;
        const user_id = '6540b2ea7d273f89dc3b1a15';

        const newUser = await userService.setUser(user_id, Number(weight), Number(targetWeight));

        res.status(200).json({
            message:"유저 정보를 변경했습니다",
            data:newUser
        });
    } catch(err) {
        next(err);
    }
}

const userController = {
    userTest,
    setUser,
};

export { userController }