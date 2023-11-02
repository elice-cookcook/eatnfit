import { Request, Response, NextFunction } from 'express';

const foodTest = (req:Request, res:Response, next:NextFunction) => {
    console.log('food');
}

const foodController = {
    foodTest,
};

export { foodController }