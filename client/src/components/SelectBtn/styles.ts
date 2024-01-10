import styled from "styled-components";

const WrappedSelectBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-right: 4px;
  margin-bottom: 5px;
  background: #ddd;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0 5px;
  }
`;

export { WrappedSelectBtn };
