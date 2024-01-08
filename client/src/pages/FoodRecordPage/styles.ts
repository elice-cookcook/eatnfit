import styled from "styled-components";

const Wrap = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecordHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  text-align: center;
  margin: 10px 0 20px 0;
  color: #00a9ff;
`;

const Main = styled.div`
  padding: 0 15px;
  h2 {
    margin: 0 0 10px;
  }
  h4 {
    margin: 10px 0;
  }
`;

const Category = styled.div``;

const Time = styled.div`
  & > input {
    color: gray;
    border: none;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
const ShowAddeditems = styled.div`
  & > span {
    font-size: 14px;
  }
`;

export {
  Wrap,
  RecordHeader,
  HeaderTitle,
  Main,
  Category,
  Time,
  ShowAddeditems,
};
