import { Request, Response, NextFunction } from 'express';

const userTest = (req:Request, res:Response, next:NextFunction) => {
    console.log('user');
}

const userController = {
    userTest,
};

export { userController }