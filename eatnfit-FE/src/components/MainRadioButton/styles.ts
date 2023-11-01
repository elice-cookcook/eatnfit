import styled from "styled-components";

export const RadioWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  .ant-radio-group {
    display: flex !important;
  }
  .ant-radio-button-wrapper {
    flex-grow: 1;
    text-align: center;
    border-radius: 0;
  }

  .ant-radio-button-wrapper-checked {
    flex-grow: 1;
    text-align: center;
    background-color: #00a9ff !important;
    border: none;
  }
`;
