import styled from "styled-components";

const WrappedSearchItems = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  position: relative;
  padding-bottom: 4px;
  border-bottom: 1px solid #b4b4b4;
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Calory = styled.div`
  font-size: 14px;
  color: gray;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  float: right;
`;

export { WrappedSearchItems, Context, Calory, Image };
