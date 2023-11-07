import { AddFoodHeader, AddFoodMain, AddFoodFooter } from "./styles";
import { CloseBtn, AddForm, LongBtn } from "../../components";
import { usePostFood } from "../../hooks";
import { useState } from "react";

export default function AddFoodPage() {
  const [formData, setFormData] = useState({
    name: "",
    kcal: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
  });
  const { mutate } = usePostFood(formData);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name !== "name" ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSave = async () => {
    if (
      formData.name !== "" &&
      formData.kcal !== 0 &&
      formData.carbohydrate !== 0 &&
      formData.protein !== 0 &&
      formData.fat !== 0
    ) {
      mutate();
    } else {
      alert("모든 입력값을 입력해주세요!");
      return;
    }
  };

  return (
    <div>
      <div style={{ padding: 10 }}>
        <CloseBtn />
      </div>
      <AddFoodHeader>
        <h2>음식 추가</h2>
      </AddFoodHeader>
      <AddFoodMain>
        <AddForm label="음식명" name="name" onChange={handleOnChange} />
        <h4>영양성분</h4>
        <span>단위(고정)</span>
        <span>1회 제공량(1인분)</span>
        <AddForm label="칼로리(kcal)" name="kcal" onChange={handleOnChange} />
        <AddForm
          label="탄수화물(g)"
          name="carbohydrate"
          onChange={handleOnChange}
        />
        <AddForm label="단백질(g)" name="protein" onChange={handleOnChange} />
        <AddForm label="지방(g)" name="fat" onChange={handleOnChange} />
      </AddFoodMain>
      <AddFoodFooter>
        <LongBtn text="저장하기" onClick={handleSave} />
      </AddFoodFooter>
    </div>
  );
}
