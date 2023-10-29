import {
  AddExerciseHeader,
  AddExerciseMain,
  AddExerciseFooter,
} from "./styles";
import { CloseBtn, AddForm, LongBtn } from "../../components";

export default function AddExercisePage() {
  return (
    <div>
      <div style={{ padding: 10 }}>
        <CloseBtn />
      </div>
      <AddExerciseHeader>
        <h2>운동 추가</h2>
      </AddExerciseHeader>
      <AddExerciseMain>
        <AddForm label="운동명" name="name" />
        <AddForm label="소모칼로리" name="calory" />
        <span>30분 기준으로 입력해주세요.</span>
      </AddExerciseMain>
      <AddExerciseFooter>
        <LongBtn text="저장하기" />
      </AddExerciseFooter>
    </div>
  );
}
