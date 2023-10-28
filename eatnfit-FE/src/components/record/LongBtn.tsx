import styled from "styled-components";

type LongBtnProps = {
  text: string;
};

const LongBtn: React.FC<LongBtnProps> = (props) => {
  return <WrappedLongBtn>{props.text}</WrappedLongBtn>;
};

export default LongBtn;

const WrappedLongBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 15px;
  color: #3c3c3c;
  background-color: #e0ebff;
`;
