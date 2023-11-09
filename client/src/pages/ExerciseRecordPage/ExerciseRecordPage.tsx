import {
  Wrap,
  RecordHeader,
  Main,
  Title,
  FormItemContainer,
  Input,
  PTag,
  HeaderTitle,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
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
import { usePostExercise } from "../../hooks/postExercise";
import { ExerciseContent } from "../../types/ExerciseContent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export default function ExerciseRecordPage() {
  const location = useLocation();
  const exerciseName = location.state?.exerciseName || "";
  const [exerciseTime, setExerciseTime] = useState<number>(0);
  const [exerciseType, setExerciseType] = useState<number>(0);
  const [exercisePart, setExercisePart] = useState<number>(0);
  const [exerciseStrength, setExerciseStrength] = useState<number>(0);

  const date = useSelector((state: RootState) => state.activeDay.activeDay);

  const unitKcal = 5; // 데이터로부터 불러오면  수정, 일단 임의 설정
  const exerciseKcal = unitKcal * exerciseTime;

  const exerciseContent: ExerciseContent = {
    name: exerciseName,
    exercise_type: exerciseType,
    exercise_part: exercisePart,
    strength: exerciseStrength,
    time: exerciseTime,
    kcal: exerciseKcal,
  };

  const { mutate } = usePostExercise(date, exerciseContent);

  const handleAddExercise = () => {
    mutate();
  };
  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={handleAddExercise} />
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
          <PTag>{exerciseName}</PTag>
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
