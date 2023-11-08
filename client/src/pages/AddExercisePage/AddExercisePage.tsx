import {
  AddExerciseHeader,
  AddExerciseMain,
  AddExerciseFooter,
} from "./styles";
import { CloseBtn, AddForm, LongBtn } from "../../components";
import { usePostActivity } from "../../hooks";
import { useState } from "react";

export default function AddExercisePage() {
  const [formData, setFormData] = useState({
    name: "",
    kcal: 0,
  });
  const { mutate } = usePostActivity(formData);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name !== "name" ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSave = async () => {
    if (formData.name !== "" && formData.kcal !== 0) {
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
      <AddExerciseHeader>
        <h2>운동 추가</h2>
      </AddExerciseHeader>
      <AddExerciseMain>
        <AddForm label="운동명" name="name" onChange={handleOnChange} />
        <AddForm label="소모칼로리" name="calory" onChange={handleOnChange} />
        <span>30분 기준의 소모칼로리를 입력해주세요.</span>
      </AddExerciseMain>
      <AddExerciseFooter>
        <LongBtn text="저장하기" onClick={handleSave} />
      </AddExerciseFooter>
    </div>
  );
}
