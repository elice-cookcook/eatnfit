import styled from "styled-components";

const WrappedFooter = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
  .open {
    opacity: 0.4;
  }
`;

const ModalMenuWrapper = styled.div`
  height: 170px;
`;
export { WrappedFooter, ModalMenuWrapper };
