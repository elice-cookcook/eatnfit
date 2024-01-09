import { WrappedSelectBtn } from "./styles";

type SelectBtnProps = {
  items: string[];
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

function SelectBtn({ items, value, onChange }: SelectBtnProps) {
  const handleOnClickBtn = (index: number) => {
    onChange(index);
  };

  return items.map((item, index) => (
    <WrappedSelectBtn
      key={item}
      style={{
        backgroundColor: value === index ? "#c2d9e5b3" : "#ddd",
      }}
      onClick={() => handleOnClickBtn(index)}
    >
      {item}
    </WrappedSelectBtn>
  ));
}

export default SelectBtn;
