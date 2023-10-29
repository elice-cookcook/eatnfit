import { WrappedSelectBtn } from "./styles";

type SelectBtnProps = {
  items: string[];
};

const SelectBtn: React.FC<SelectBtnProps> = (props) => {
  return props.items.map((item) => (
    <WrappedSelectBtn
      key={item}
      style={{
        width: item.length >= 4 ? "70px" : "60px",
        marginBottom: props.items.length >= 8 ? "4px" : "0",
      }}
    >
      {item}
    </WrappedSelectBtn>
  ));
};

export default SelectBtn;
