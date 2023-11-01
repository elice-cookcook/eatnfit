import { WrappedSelectBtn } from "./styles";
import { useState } from "react";

type SelectBtnProps = {
  items: string[];
};

function SelectBtn(props: SelectBtnProps) {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleOnClickBtn = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
    } else {
      setSelectedButton(index);
    }
  };

  return props.items.map((item, index) => (
    <WrappedSelectBtn
      key={item}
      style={{
        width: item.length >= 4 ? "70px" : "60px",
        marginBottom: props.items.length >= 8 ? "4px" : "0",
        backgroundColor: selectedButton === index ? "#c2d9e5b3" : "#ddd",
      }}
      onClick={() => handleOnClickBtn(index)}
    >
      {item}
    </WrappedSelectBtn>
  ));
}

export default SelectBtn;
