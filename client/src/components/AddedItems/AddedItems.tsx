import { WrappedAddItems, Name, Quantity, Calory, Delete } from "./styles";
import DeleteImg from "../../img/delete.png";
import { useState } from "react";
import { RootState, setFood } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

type AddedItemsProps = {
  items: {
    name?: string | undefined;
    calory?: number | undefined;
    quantity?: number | undefined;
  }[];
};

function AddedItems(props: AddedItemsProps) {
  const [items, setItems] = useState(
    props.items.map((item) => ({
      ...item,
      baseCalory: item.calory,
    }))
  );
  const selectedFood = useSelector((state: RootState) => state.food);
  const newFood = [...selectedFood];
  const dispatch = useDispatch();
  // 수량
  const handleQuantityChange = (index: number, newValue: number) => {
    if (newValue < 1) {
      newValue = 1;
    }
    setItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            quantity: newValue,
            calory: Number(item.baseCalory) * newValue,
          };
        }
        return item;
      })
    );
    newFood[index].quantity = newValue;
    newFood[index].calory = Number(items[index].baseCalory) * newValue;
    dispatch(setFood(newFood));
  };

  // 삭제
  const handleDeleteBtn = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    newFood.splice(index, 1);
    dispatch(setFood(newFood));
  };

  return items.map((item, index) => (
    <WrappedAddItems key={item.name}>
      <Name>{item.name}</Name>
      <Quantity>
        <button
          type="button"
          className="minus"
          onClick={() => {
            const newValue = Number(item.quantity) - 1;
            handleQuantityChange(index, newValue);
          }}
        >
          -
        </button>
        <input
          type="text"
          className="inp"
          value={item.quantity}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            handleQuantityChange(index, newValue);
          }}
        />
        <button
          type="button"
          className="plus"
          onClick={() => {
            const newValue = Number(item.quantity) + 1;
            handleQuantityChange(index, newValue);
          }}
        >
          +
        </button>
      </Quantity>
      <Calory>{item.calory}kcal</Calory>
      <Delete>
        <img
          src={DeleteImg}
          style={{ width: 30, cursor: "pointer" }}
          onClick={() => {
            handleDeleteBtn(index);
          }}
        />
      </Delete>
    </WrappedAddItems>
  ));
}

export default AddedItems;
