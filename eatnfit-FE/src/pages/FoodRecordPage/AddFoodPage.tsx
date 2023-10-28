import styled from "styled-components";
import Close from "../../components/record/Close";
import AddForm from "../../components/record/AddForm";
import LongBtn from "../../components/record/LongBtn";

export default function AddFoodPage() {
  return (
    <div>
      <div style={{ padding: 10 }}>
        <Close />
      </div>
      <AddFoodHeader>
        <h2>음식 추가</h2>
      </AddFoodHeader>
      <Main>
        <AddForm label="음식명" name="name" />
        <h4>영양성분</h4>
        <span>단위(고정)</span>
        <span>1회 제공량(1인분)</span>
        <AddForm label="칼로리(kcal)" name="calory" />
        <AddForm label="탄수화물(g)" name="carbohydrate" />
        <AddForm label="단백질(g)" name="protein" />
        <AddForm label="지방(g)" name="fat" />
      </Main>
      <AddFoodFooter>
        <LongBtn text="저장하기" />
      </AddFoodFooter>
    </div>
  );
}

const AddFoodHeader = styled.div`
  text-align: center;
  & > h2 {
    margin: 0;
  }
`;

const Main = styled.form`
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
