import { WrappedSelectBtn } from "./styles";

type SelectBtnProps = {
  items: string[];
};

const SelectBtn: React.FC<SelectBtnProps> = (props) => {
  return props.items.map((item) => (
    <WrappedSelectBtn key={item}>{item}</WrappedSelectBtn>
  ));
};

export default SelectBtn;
