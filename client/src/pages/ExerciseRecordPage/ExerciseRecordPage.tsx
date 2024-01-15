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
import { useLocation, useNavigate } from "react-router-dom";
import { CloseBtn, SubmitBtn, SelectBtn, LongBtn } from "../../components";
import {
  exercisePartArr,
  exerciseStrengthArr,
  exerciseTypeArr,
} from "../../lib";
import { useEffect, useState } from "react";
import { usePostExercise, useGetActivityByName } from "../../hooks";
import { ExerciseContent } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setExerciseRecord } from "../../redux";
import { ROUTE } from "../../routes/Route";
import { message } from "antd";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export default function ExerciseRecordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const exerciseName = location.state?.exerciseName || "";
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const existedExerciseTime = useSelector(
    (state: RootState) => state.exerciseRecord.exercise_time
  );
  const existedExerciseType = useSelector(
    (state: RootState) => state.exerciseRecord.exercise_type
  );
  const existedExercisePart = useSelector(
    (state: RootState) => state.exerciseRecord.exercise_part
  );
  const existedExerciseStrength = useSelector(
    (state: RootState) => state.exerciseRecord.exercise_strength
  );
  const [exerciseTime, setExerciseTime] = useState<number>(existedExerciseTime);
  const [exerciseType, setExerciseType] = useState<number>(existedExerciseType);
  const [exercisePart, setExercisePart] = useState<number>(existedExercisePart);
  const [exerciseStrength, setExerciseStrength] = useState<number>(
    existedExerciseStrength
  );

  const { data } = useGetActivityByName(exerciseName); // 액티비티 정보 불러오기
  const unitKcal = data?.kcal || 0;

  const exerciseContent: ExerciseContent = {
    name: exerciseName,
    exercise_type: exerciseType,
    exercise_part: exercisePart,
    strength: exerciseStrength,
    time: exerciseTime,
    kcal: unitKcal || 0,
  };

  const linkToSearchPage = () => {
    navigate(ROUTE.EXERCISE_SEARCH_PAGE.link);
  };

  const { mutate: postExercise } = usePostExercise(
    format(activeDay, "yyyyMMdd"),
    exerciseContent
  );

  const handleAddExercise = () => {
    if (!exerciseName) {
      message.error("운동을 선택해주세요");
    } else if (!exerciseTime) {
      message.error("운동 시간을 입력해주세요.");
    } else {
      postExercise();
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(exerciseTime);
    dispatch(
      setExerciseRecord({
        exercise_name: exerciseName,
        exercise_time: exerciseTime,
        exercise_type: exerciseType,
        exercise_part: exercisePart,
        exercise_strength: exerciseStrength,
      })
    );
  }, [
    dispatch,
    exerciseName,
    exercisePart,
    exerciseStrength,
    exerciseTime,
    exerciseType,
  ]);
  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={handleAddExercise} />
      </RecordHeader>
      <Main>
        <HeaderTitle>
          {format(activeDay, "yyyy년 MM월 dd일 eeee", { locale: ko })}의 운동
          기록
        </HeaderTitle>
        <LongBtn onClick={linkToSearchPage} text="+ 운동 검색하기" />
        <FormItemContainer className="name">
          <Title>운동명</Title>
          <PTag
            onClick={linkToSearchPage}
            empty={exerciseName.length == 0 ? "true" : ""}
          >
            {exerciseName}
          </PTag>
        </FormItemContainer>
        <FormItemContainer className="time">
          <Title>운동 시간</Title>
          <Input
            value={exerciseTime || ""}
            onChange={(e) => setExerciseTime(Number(e.target.value))}
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
    </Wrap>
  );
}
