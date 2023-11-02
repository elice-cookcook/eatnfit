import { WrappedAddItems, Name, Quantity, Calory, Delete } from "./styles";
import DeleteImg from "../../img/delete.png";
import { useState } from "react";

type AddedItemsProps = {
  items: { name: string; calory: number; quantity: number }[];
};

function AddedItems(props: AddedItemsProps) {
  const [items, setItems] = useState(
    props.items.map((item) => ({ ...item, baseCalory: item.calory }))
  );

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
            calory: item.baseCalory * newValue,
          };
        }
        return item;
      })
    );
  };

  // 삭제
  const handleDeleteBtn = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return items.map((item, index) => (
    <WrappedAddItems key={item.name}>
      <Name>{item.name}</Name>
      <Quantity>
        <button
          type="button"
          className="minus"
          onClick={() => {
            const newValue = item.quantity - 1;
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
            const newValue = item.quantity + 1;
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
