import styled from "styled-components";

const ModalWrapper = styled.div`
  text-align: center;
  height: 180px;
`;

const MenuItem = styled.div`
  border: 1px solid #89cff3;
  color: #00a9ff;
  padding: 15px;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #89cff3;
    color: white;
  }
`;

export { ModalWrapper, MenuItem };
