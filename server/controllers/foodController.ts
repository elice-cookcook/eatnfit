import { Request, Response, NextFunction } from "express";
import { foodService } from "../services/foodService";

const foodTest = (req: Request, res: Response, next: NextFunction) => {
  res.send("food");
};

const addFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_id = "6540b2ea7d273f89dc3b1a15";
    const name = req.body.name;
    const kcal = Number(req.body.kcal);
    const carbohydrate = Number(req.body.carbohydrate);
    const protein = Number(req.body.protein);
    const fat = Number(req.body.fat);
    const addedFood = await foodService.addFood(
      user_id,
      name,
      kcal,
      carbohydrate,
      protein,
      fat
    );

    res.status(201).json({
      message: "음식이 추가되었습니다",
      data: addedFood,
    });
  } catch (err) {
    next(err);
  }
};

const getFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let user_id = "6540b2ea7d273f89dc3b1a15";

    const name = req.query.name as string;
    if (name && name.length > 0) {
      const foodList = await foodService.getFoodByName(user_id, name);

      res.status(200).json({
        message: `${name} 검색 결과 입니다`,
        data: foodList,
      });
    } else {
      const foodList = await foodService.getFood(user_id);

      res.status(200).json({
        message: "전체 음식 목록입니다",
        data: foodList,
      });
    }
  } catch (err) {
    next(err);
  }
};

const foodController = {
  foodTest,
  addFood,
  getFood,
};

export { foodController };
