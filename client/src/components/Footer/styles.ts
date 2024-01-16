import styled from "styled-components";

export const WrappedFooter = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0px -5px 10px -5px lightgray;
  width: 480px;
  height: 40px;
  position: fixed;
  bottom: 0px;
  z-index: 10;

  @media screen and (max-width: 480px) {
    width: 100vw;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 28px;
      height: 28px;
      color: #89cff3;
    }
  }
`;

export const ModalMenuWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 12;
`;

export const MenuButton = styled.button``;

export const ModalButton = styled.button`
  &.open {
    opacity: 0.4;
  }
  svg {
    scale: 1.2;
  }
`;
