import { AddFoodHeader, AddFoodMain, AddFoodFooter } from "./styles";
import { CloseBtn, AddForm, LongBtn } from "../../components";

export default function AddFoodPage() {
  return (
    <div>
      <div style={{ padding: 10 }}>
        <CloseBtn />
      </div>
      <AddFoodHeader>
        <h2>음식 추가</h2>
      </AddFoodHeader>
      <AddFoodMain>
        <AddForm label="음식명" name="name" />
        <h4>영양성분</h4>
        <span>단위(고정)</span>
        <span>1회 제공량(1인분)</span>
        <AddForm label="칼로리(kcal)" name="calory" />
        <AddForm label="탄수화물(g)" name="carbohydrate" />
        <AddForm label="단백질(g)" name="protein" />
        <AddForm label="지방(g)" name="fat" />
      </AddFoodMain>
      <AddFoodFooter>
        <LongBtn text="저장하기" />
      </AddFoodFooter>
    </div>
  );
}
