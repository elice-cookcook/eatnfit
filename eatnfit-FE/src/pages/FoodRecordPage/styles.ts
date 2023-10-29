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
  border: 1px solid gray;

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

// ----------AddFoodPage --------------
const AddFoodHeader = styled.div`
  text-align: center;
  & > h2 {
    margin: 0;
  }
`;

const AddFoodMain = styled.form`
  padding: 30px 10px;
  & > h4 {
    color: #3c3c3c;
    margin: 20px 0 4px;
    padding: 0 24px;
  }
  & > span {
    color: #787878;
    font-size: 14px;
    padding: 0 24px;
  }
`;

const AddFoodFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
`;

// ----------SearchFoodPage --------------
const SearchFoodMain = styled.div`
  & > h2 {
    margin: 0 0 10px;
    text-align: center;
  }
  padding: 0 28px;
`;

const LinkToAddFood = styled.div`
  margin: 0 10px;
`;

const Items = styled.div`
  height: 80vh;
  margin: 4px 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
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
  AddFoodHeader,
  AddFoodMain,
  AddFoodFooter,
  SearchFoodMain,
  LinkToAddFood,
  Items,
};
