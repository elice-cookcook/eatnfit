import { MainExerciseItems } from "..";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";
import { Spin } from "antd";
import { useGetAllExercise } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export default function MainExercise() {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const { data, isLoading } = useGetAllExercise(activeDay);

  if (isLoading) return <Spin style={{ marginTop: "100px" }} />;

  const exerciseList = data?.map((item) => {
    const exerciseTypeMap: Record<number, string> = {
      0: "유산소",
      1: "무산소",
      2: "스트레칭",
    };
    const type = exerciseTypeMap[item.exercise_type];

    const hours = Math.floor(item.time / 60);
    const minutes = item.time % 60;
    const time = `${hours > 0 ? `${hours}시간` : ""} ${
      minutes > 0 ? `${minutes}분` : ""
    }`;

    return {
      name: item.name,
      type,
      time,
      kcal: parseFloat((item.kcal * item.time).toFixed(1)),
      date: item.date.toString(),
    };
  });

  return (
    <Container>
      <ItemContainer>
        <Space>
          <MainExerciseItems items={exerciseList} />
        </Space>
      </ItemContainer>
    </Container>
  );
}
