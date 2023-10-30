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

const Main = styled.div`
  padding: 0 15px;
  h2 {
    margin: 0 0 10px;
  }
  h4 {
    margin: 10px 0;
  }
`;

const AddImg = styled.div`
  display: flex;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
`;

const Category = styled.div``;

const Time = styled.div`
  & > span {
    color: gray;
  }
`;

const Calory = styled.div`
  h5 {
    width: 90px;
    margin: 0;
  }
  input {
    width: 100px;
    border-width: 0 0 1px;
    text-align: center;
    &:focus {
      outline: none;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  .first,
  .second {
    display: flex;
    margin-bottom: 10px;
  }
`;

const Left = styled.div`
  width: 50%;
  float: left;
`;

const Right = styled.div`
  width: 50%;
  float: right;
`;

const ShowAddeditems = styled.div`
  & > span {
    font-size: 14px;
  }
`;

export {
  Wrap,
  RecordHeader,
  Main,
  AddImg,
  Category,
  Time,
  Calory,
  Left,
  Right,
  ShowAddeditems,
};
