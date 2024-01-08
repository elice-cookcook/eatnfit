import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
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
    color: #00a9ff;
    text-align: center;
  }
  h4 {
    margin: 15px 0;
    font-weight: bold;
  }
`;

const AddImg = styled.div`
  display: flex;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  cursor: pointer;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
`;

const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 200px;
  height: 200px;
  & > img {
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    border: 1px solid #ddd;
  }
  & > button {
    width: 100px;
    margin: 4px auto;
    background: #c5e7f8b3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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

const ButtonContainer = styled.div`
  display: flex;
  button {
    margin-left: 5px;
  }
`;

const Span = styled.span`
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-right: 4px;
  padding: 5px;
  color: white;
  background-color: #89cff3;
`;

const WrappedAddItems = styled.div`
  border: 1px solid #e0ebff;
  border-radius: 4px;
  margin: 4px 0;
  padding: 4px 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 40px;
`;

const Name = styled.div`
  color: #89cff3;
  margin-left: 20px;
`;

const Count = styled.div`
  color: #787878;
  margin-left: 12px;
`;

const Kcal = styled.div`
  color: #787878;
  margin-left: 12px;
`;

const CalSpan = styled.span`
  font-size: 14px;
  color: #89cff3;
`;

export {
  Wrap,
  RecordHeader,
  Main,
  AddImg,
  SelectImage,
  Category,
  Time,
  Calory,
  Left,
  Right,
  ShowAddeditems,
  ButtonContainer,
  Span,
  WrappedAddItems,
  Name,
  Count,
  Kcal,
  CalSpan,
};
