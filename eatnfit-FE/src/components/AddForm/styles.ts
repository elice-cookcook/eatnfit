import styled from "styled-components";

const WrappedAddForm = styled.div`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  width: 120px;
`;

const Input = styled.input`
  margin-right: 28px;
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 16px;
  width: 60%;

  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export { WrappedAddForm, Label, Input };
