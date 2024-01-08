import { WrappedSearchItems, Context, Calory, Image } from "./styles";
import AddImg from "../../img/footerPlus.png";
import { FoodRecord } from "../../types";
import { Dispatch, SetStateAction } from "react";

type SearchItemsProps = {
  items: {
    id?: string;
    name?: string;
    calory?: number;
    carbohydrate?: number;
    protein?: number;
    fat?: number;
  }[];
  existedFood: FoodRecord[];
  setExistedFood: Dispatch<SetStateAction<FoodRecord[]>>
  selectedItemNames: (string | undefined)[];
  onAddItem: (itemName: (string | undefined)[]) => void;
};

function SearchItems(props: SearchItemsProps) {
  if (props.items?.length === 0) {
    return (
      <div style={{ marginTop: 12, textAlign: "center" }}>
        검색 결과가 없습니다. 직접 추가해보세요!
      </div>
    );
  }
  const handleAddFoodItem = (item: FoodRecord) => {
    const updatedItemNames = [...props.selectedItemNames, item.name];
    props.onAddItem(updatedItemNames);

    const newFood = [...props.existedFood];
    if (newFood.length >= 1) {
      const existingFood = newFood.find((food) => food.name === item.name);
      if (existingFood) {
        existingFood.quantity = Number(existingFood.quantity) + 1;
      } else {
        newFood.push(item);
      }
    } else newFood.push(item);
    props.setExistedFood(newFood);
    props.onAddItem([...props.selectedItemNames, item.name]);
  };

  const handleAddExerciseItem = (itemName: string | undefined) => {
    const updatedItemNames = [...props.selectedItemNames, itemName];
    props.onAddItem(updatedItemNames);
  };

  return props.items?.map((item) => (
    <WrappedSearchItems
      key={item.name}
      onClick={() =>
        item.calory ? handleAddFoodItem(item) : handleAddExerciseItem(item.name)
      }
    >
      <Context>
        <div className="name">{item.name}</div>
        {item.calory && <Calory>{item.calory}kcal, 1회 제공량</Calory>}
      </Context>
      <Image>
        <img src={AddImg} width="24px" />
      </Image>
    </WrappedSearchItems>
  ));
}

export default SearchItems;
