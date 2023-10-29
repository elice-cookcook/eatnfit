import {
  AddExerciseHeader,
  AddExerciseMain,
  AddExerciseFooter,
} from "./styles";
import { CloseBtn, AddedForm, LongBtn } from "../../components";

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
        <AddedForm label="운동명" name="name" />
        <AddedForm label="운동시간" name="time" />
        <AddedForm label="소모칼로리" name="calory" />
        <span>30분 기준</span>
      </AddExerciseMain>
      <AddExerciseFooter>
        <LongBtn text="저장하기" />
      </AddExerciseFooter>
    </div>
  );
}
