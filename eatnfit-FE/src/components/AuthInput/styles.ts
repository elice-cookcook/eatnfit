import styled from "styled-components";
import InputStatus from "../../utils/inputStatus";

export const InputWrapper = styled.div<{ status?: string }>`
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
  border-radius: 3px;
  span {
    font-size: 12px;
    color: gray;
  }
`;

export const Input = styled.input`
  border: none;
  width: 70%;
  font-size: 14px;
  background-color: transparent;
  margin: 0 10px;
  padding: 5px;
`;
