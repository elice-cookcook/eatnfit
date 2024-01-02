import styled from "styled-components";

export const ModalWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  color: #00a9ff;
  background-color: white;
  border: 1px solid #89cff3;
  padding: 10px;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: #89cff3;
    color: white;
  }
`;
