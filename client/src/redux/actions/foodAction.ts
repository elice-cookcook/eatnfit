import { FoodRecord } from "../../types";

export const SET_FOOD = "SET_FOOD";

export const setFood = (
    food: FoodRecord[]) => {
  return {
    type: SET_FOOD,
    payload: food,
  };
};
