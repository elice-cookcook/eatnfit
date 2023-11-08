import { Request, Response, NextFunction } from "express";
import { userService } from '../services/userService';

const userTest = (req:Request, res:Response, next:NextFunction) => {
    console.log('user');
}

const addUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { name, email, password, height, weight, targetWeight } = req.body;
        const newUser = await userService.addUser(
            name,
            email,
            password,
            Number(height),
            Number(weight),
            Number(targetWeight));
        res.status(201).json({
            message: "유저 정보를 추가했습니다",
            data:newUser
        });
    } catch(err) {
        next(err);
    }
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

const userLogin = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { email, password } = req.body;
        const userId = await userService.userLogin(email, `${password}`);

        res.cookie('USER_COOKIE', JSON.stringify({
            userId: userId
        }));

        res.status(200).json({
            message:'로그인 되었습니다'
        })
    } catch(err) {
        next(err);
    }
}

const loginCheck = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const user = req.cookies['USER_COOKIE'];

        if(!user){
            res.status(400).json({
                message:"로그인이 필요합니다",
            });
        }
        const userData = JSON.parse(user);
        console.log(userData.userId);
        const check = await userService.loginCheck(userData.userId);
        
        if(!check){
            res.status(400).json({
                message:"잘못된 요청입니다",
            });
        }
    } catch(err) {
        next(err);
    }
}

const userController = {
    userTest,
    setUser,
    addUser,
    userLogin,
    loginCheck
};

export { userController }