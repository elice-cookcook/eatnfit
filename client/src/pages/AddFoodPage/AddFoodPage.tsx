import { AddFoodHeader, AddFoodMain, AddFoodFooter } from "./styles";
import { CloseBtn, AddForm, LongBtn } from "../../components";
import { usePostFood } from "../../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFoodPage() {
  const nav = useNavigate();
  const mutation = usePostFood();
  const [formData, setFormData] = useState({
    name: "",
    kcal: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name !== "name" ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSave = async () => {
    // 모든 필드 중 하나라도 비어 있는지 확인
    if (
      !formData.name.trim() ||
      isNaN(formData.kcal) ||
      isNaN(formData.carbohydrate) ||
      isNaN(formData.protein) ||
      isNaN(formData.fat)
    ) {
      alert("모든 입력값을 채워주세요.");
      return;
    }

    mutation.mutate(formData);
    nav("/foodrecord/search"); // 검색 페이지로 이동

    /*
    try {
      const response = await mutation.mutateAsync(formData);
      if (response.status === 201) {
        alert(response.data.message);
        nav("/foodrecord/search"); // 검색 페이지로 이동
      } else {
        alert(response.data); // 이미 존재하는 음식명입니다
      }
    } catch (e) {
      alert("서버 오류 발생: " + e);
    }
    */
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
