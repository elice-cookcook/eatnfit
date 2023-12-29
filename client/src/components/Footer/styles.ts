import styled from "styled-components";

const WrappedFooter = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px -5px 10px -5px lightgray;
  width: 480px;
  height: 40px;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  svg {
    cursor: pointer;
  }
  .open {
    opacity: 0.4;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const ModalMenuWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 12;
`;
export { WrappedFooter, ModalMenuWrapper };
