import styled from "styled-components";
import { InputStatus } from "../../utils";

const InputWrapper = styled.div<{ status?: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 50%;
  border: 1px solid gray;
  border-bottom: solid
    ${({ status }) =>
      status === InputStatus.ERROR
        ? "2px tomato"
        : status === InputStatus.SUCCESS
        ? "2px green"
        : "1px gray"};
  border-radius: 5px;
  & > span {
    font-size: 12px;
    color: gray;
  }
`;

const Input = styled.input`
  border: none;
  width: 70%;
  font-size: 14px;
  background-color: transparent;
  margin: 0 10px;
  padding: 5px;
  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 500px white inset !important;
  }
`;

const FeildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 0;
  margin: 1px 0;
`;

const Message = styled.p<{ status?: string }>`
  font-weight: bold;
  font-size: 12px;
  height: 15px;
  margin: 2px 0;
  color: ${({ status }) =>
    status === InputStatus.ERROR
      ? "tomato"
      : status === InputStatus.SUCCESS
      ? "green"
      : "gray"};
`;

export { InputWrapper, Input, FeildWrapper, Message };
