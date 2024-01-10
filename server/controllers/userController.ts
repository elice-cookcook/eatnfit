import { Request, Response, NextFunction } from "express";
import { userService } from '../services/userService';
import { exerciseService } from '../services/exerciseService';
import { foodService } from '../services/foodService';
import { mealService } from '../services/mealService';
import { planService } from '../services/planService';

const getUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const userCookie = req.cookies['USER_COOKIE'];
        const userData = JSON.parse(userCookie);

        const user = await userService.getUser(userData.userId);

        res.status(200).json({
            message: '유저 정보 조회',
            data:user
        });
    } catch(err) {
        next(err);
    }
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
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;

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

const deleteUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const currentId = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { id } = req.params;

        if(currentId !== id){
            throw new Error('권한이 없습니다');
        }

        await exerciseService.deleteExerciseByUserId(currentId);
        await foodService.deleteFoodByUserId(currentId);
        await mealService.deleteMealByUserId(currentId);
        await planService.deletePlanByUserId(currentId);
        await userService.deleteUser(currentId);

        res.status(200).json({
            message: "회원탈퇴가 완료되었습니다"
        });
    } catch(err) {
        next(err);
    }
}

const userController = {
    getUser,
    setUser,
    addUser,
    userLogin,
    loginCheck,
    deleteUser
};

export { userController }