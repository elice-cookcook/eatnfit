import {
  Wrap,
  RecordHeader,
  Main,
  Title,
  FormItemContainer,
  Input,
  HeaderTitle,
} from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  Footer,
} from "../../components";
import {
  exercisePartArr,
  exerciseStrengthArr,
  exerciseTypeArr,
} from "../../lib";
import { useState } from "react";
import moment from "moment";

export default function ExerciseRecordPage() {
  const [exerciseName, setExerciseName] = useState(""); // 검색으로 추가하여 반영은 추후 구현 예정
  const [exerciseTime, setExerciseTime] = useState(0);
  const [exerciseType, setExerciseType] = useState<number | null>(0);
  const [exercisePart, setExercisePart] = useState<number | null>(0);
  const [exerciseStrength, setExerciseStrength] = useState<number | null>(0);

  const date = 20231108; // 추후 리덕스 불러오기

  console.log(
    exerciseName,
    exerciseTime,
    exerciseType,
    exercisePart,
    exerciseStrength
  ); //확인용 콘솔, 추후 삭제

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn />
      </RecordHeader>
      <Main>
        <HeaderTitle>
          {moment(date.toString()).format("YYYY년 MM월 DD일")}의 운동 기록
        </HeaderTitle>
        <Link to="/exerciserecord/search">
          <LongBtn text="+ 운동 검색하기" />
        </Link>
        <FormItemContainer className="name">
          <Title>운동명</Title>
          <Input
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="운동 이름을 입력해주세요."
          ></Input>
        </FormItemContainer>
        <FormItemContainer className="time">
          <Title>운동 시간</Title>
          <Input
            value={exerciseTime}
            onChange={(e) => setExerciseTime(parseInt(e.target.value))}
            type="number"
          ></Input>
          <span>분</span>
        </FormItemContainer>
        <FormItemContainer className="kind">
          <Title>운동 종류</Title>
          <SelectBtn
            items={exerciseTypeArr}
            value={exerciseType}
            onChange={setExerciseType}
          />
        </FormItemContainer>
        <FormItemContainer className="body">
          <Title>운동 부위</Title>
          <SelectBtn
            items={exercisePartArr}
            value={exercisePart}
            onChange={setExercisePart}
          />
        </FormItemContainer>
        <FormItemContainer className="intensity">
          <Title>운동 강도</Title>
          <SelectBtn
            items={exerciseStrengthArr}
            value={exerciseStrength}
            onChange={setExerciseStrength}
          />
        </FormItemContainer>
      </Main>
      <Footer />
    </Wrap>
  );
}
