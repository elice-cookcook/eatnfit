import { WrappedSelectBtn } from "./styles";

type SelectBtnProps = {
  items: string[];
  value: number | null;
  onChange: React.Dispatch<React.SetStateAction<number | null>>;
};

function SelectBtn({ items, value, onChange }: SelectBtnProps) {
  const handleOnClickBtn = (index: number) => {
    if (value === index) {
      onChange(null);
    } else {
      onChange(index);
    }
  };

  return items.map((item, index) => (
    <WrappedSelectBtn
      key={item}
      style={{
        width: item.length >= 4 ? "70px" : "60px",
        marginBottom: items.length >= 8 ? "4px" : "0",
        backgroundColor: value === index ? "#c2d9e5b3" : "#ddd",
      }}
      onClick={() => handleOnClickBtn(index)}
    >
      {item}
    </WrappedSelectBtn>
  ));
}

export default SelectBtn;
