import styled from "styled-components";
import { Link } from "react-router-dom";
import Close from "../../components/record/Close";
import SubmitBtn from "../../components/record/SubmitBtn";
import SelectBtn from "../../components/record/SelectBtn";
import LongBtn from "../../components/record/LongBtn";
import AddItems from "../../components/record/AddItems";
import Footer from "../../components/common/Footer";

export default function FoodRecordPage() {
  const meal = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];
  const addItem = [
    { name: "단호박샐러드", calory: "940" },
    { name: "고구마", calory: "320" },
  ];

  return (
    <Wrap>
      <RecordHeader>
        <Close />
        <SubmitBtn />
      </RecordHeader>
      <Main>
        <h2>10월 26일 식단기록</h2>
        <AddImg>
          <span>사진 등록하기</span>
        </AddImg>
        <Category>
          <h4>분류</h4>
          <SelectBtn items={meal} />
        </Category>
        <Time>
          <h4>시간</h4>
          <span>00:00</span>
        </Time>
        <Calory>
          <h4>영양성분</h4>
          <Left>
            <div className="first">
              <h5>칼로리</h5>
              <input value="0 kcal" />
            </div>
            <div className="second">
              <h5>단백질</h5>
              <input value="0 g" />
            </div>
          </Left>
          <Right>
            <div className="first">
              <h5>탄수화물</h5>
              <input value="0 g" />
            </div>
            <div className="second">
              <h5>지방</h5>
              <input value="0 g" />
            </div>
          </Right>
        </Calory>
        <Link to="/foodrecord/search">
          <LongBtn text="+ 음식 검색하기" />
        </Link>
        <ShowAdditems>
          <span>추가한 음식</span>
          <AddItems items={addItem} />
        </ShowAdditems>
      </Main>
      <Footer />
    </Wrap>
  );
}

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

const ShowAdditems = styled.div`
  & > span {
    font-size: 14px;
  }
`;
