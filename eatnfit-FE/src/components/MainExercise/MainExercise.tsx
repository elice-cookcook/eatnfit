import { Footer, MainExerciseItems } from "..";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";

export default function MainExercise() {
  const exerciseList = [
    {
      title: "오전 공복 줄넘기",
      type: "유산소",
      time: "30분",
      kcal: 100,
    },
    {
      title: "걷기운동",
      type: "유산소",
      time: "1시간 30분",
      kcal: 100,
    },
    {
      title: "근력운동",
      type: "무산소",
      time: "30분",
      kcal: 130,
    },
    {
      title: "수영",
      type: "유산소",
      time: "1시간",
      kcal: 200,
    },
  ];
  return (
    <Container>
      <ItemContainer>
        <Space>
          <MainExerciseItems items={exerciseList} />
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
