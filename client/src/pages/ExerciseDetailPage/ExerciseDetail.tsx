import { useParams } from "react-router-dom";
import {
  Wrap,
  RecordHeader,
  Main,
  Title,
  FormItemContainer,
  Input,
  PTag,
  HeaderTitle,
  Span,
  ButtonContainer,
} from "./styles";
import { CloseBtn, SubmitBtn, SelectBtn, Footer } from "../../components";
import {
  exercisePartArr,
  exerciseStrengthArr,
  exerciseTypeArr,
} from "../../lib";
import { useEffect, useState } from "react";
import { useGetActivityByName } from "../../hooks/getActivityByName";
import { ExerciseContent } from "../../types";
import {
  useGetAllExercise,
  usePatchExercise,
  useDeleteExercise,
} from "../../hooks";
import { getFormatDate } from "../../utils";

const ExerciseDetailPage = () => {
  const { date, idx } = useParams();
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState<number>(0);
  const [exerciseType, setExerciseType] = useState<number>(0);
  const [exercisePart, setExercisePart] = useState<number>(0);
  const [exerciseStrength, setExerciseStrength] = useState<number>(0);
  const [edit, setEdit] = useState(false);
  const [unitKcal, setUnitKcal] = useState(0);
  const { data } = useGetAllExercise(date || "");
  const [dataId, setDataId] = useState("");
  const activityData = useGetActivityByName(exerciseName); // 액티비티 정보 불러오기

  useEffect(() => {
    if (activityData.data && data && date && (idx || idx === "0") && !edit) {
      const target = data[parseInt(idx)];
      setExerciseName(target.name);
      setExerciseTime(target.time);
      setExerciseType(target.exercise_type);
      setExercisePart(target.exercise_part);
      setExerciseStrength(target.strength);
      setDataId(target._id);
      setUnitKcal(activityData.data?.kcal);
    }
  }, [data, idx, date, edit, activityData]);

  const exerciseContent: ExerciseContent = {
    name: exerciseName,
    exercise_type: exerciseType,
    exercise_part: exercisePart,
    strength: exerciseStrength,
    time: exerciseTime,
    kcal: unitKcal || 0,
  };

  const patchExercise = usePatchExercise(date!, dataId, exerciseContent);
  const deleteExercise = useDeleteExercise(dataId, date!);

  const handlePatchExercise = () => {
    toggleEdit();
    patchExercise.mutate();
  };

  const handleDeleteExercise = () => {
    deleteExercise.mutate();
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        {edit ? (
          <ButtonContainer>
            <SubmitBtn onSubmit={toggleEdit} text="취소" color="pink" />
            <SubmitBtn onSubmit={handlePatchExercise} text="완료" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <SubmitBtn
              onSubmit={handleDeleteExercise}
              text="삭제"
              color="pink"
            />
            <SubmitBtn onSubmit={toggleEdit} text="수정" />
          </ButtonContainer>
        )}
      </RecordHeader>
      <Main>
        {date && <HeaderTitle>{getFormatDate(date)}의 운동 기록</HeaderTitle>}

        <FormItemContainer className="name">
          <Title>운동명</Title>
          <PTag>{exerciseName}</PTag>
        </FormItemContainer>
        <FormItemContainer className="time">
          <Title>운동 시간</Title>
          {edit ? (
            <Input
              value={exerciseTime || ""}
              onChange={(e) => setExerciseTime(parseInt(e.target.value))}
              type="number"
            ></Input>
          ) : (
            <span>{exerciseTime}</span>
          )}
          <span>분</span>
        </FormItemContainer>
        <FormItemContainer className="kind">
          <Title>운동 종류</Title>
          {edit ? (
            <SelectBtn
              items={exerciseTypeArr}
              value={exerciseType}
              onChange={setExerciseType}
            />
          ) : (
            <Span>{exerciseTypeArr[exerciseType]}</Span>
          )}
        </FormItemContainer>
        <FormItemContainer className="body">
          <Title>운동 부위</Title>
          {edit ? (
            <SelectBtn
              items={exercisePartArr}
              value={exercisePart}
              onChange={setExercisePart}
            />
          ) : (
            <Span>{exercisePartArr[exercisePart]}</Span>
          )}
        </FormItemContainer>
        <FormItemContainer className="intensity">
          <Title>운동 강도</Title>
          {edit ? (
            <SelectBtn
              items={exerciseStrengthArr}
              value={exerciseStrength}
              onChange={setExerciseStrength}
            />
          ) : (
            <Span>{exerciseStrengthArr[exerciseStrength]}</Span>
          )}
        </FormItemContainer>
      </Main>
      <Footer />
    </Wrap>
  );
};

export default ExerciseDetailPage;
