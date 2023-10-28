import styled from "styled-components";

type SelectBtnProps = {
  items: string[];
};

const SelectBtn: React.FC<SelectBtnProps> = (props) => {
  return props.items.map((item) => (
    <WrappedSelectBtn key={item}>{item}</WrappedSelectBtn>
  ));
};

export default SelectBtn;

const WrappedSelectBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-right: 4px;
  background: #e5e8f2;

  &:hover {
    background: #e0ebff;
  }
`;
