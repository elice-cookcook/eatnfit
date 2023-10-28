import styled from "styled-components";

const SubmitBtn = () => {
  return <WrappedSubmitBtn>등록</WrappedSubmitBtn>;
};

export default SubmitBtn;

const WrappedSubmitBtn = styled.button`
  width: 60px;
  height: 35px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  background: #e0ebff;
`;
