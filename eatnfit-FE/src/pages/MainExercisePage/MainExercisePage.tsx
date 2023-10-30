import { Divider } from "antd";
import {
  Dashboard,
  Footer,
  MainExerciseItems,
  MainRadioButton,
} from "../../components";
import { Container, ItemContainer, StyledTitle } from "../MainFoodPage/styles";
import { Space } from "./styles";

export default function MainExercisePage() {
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
      <MainRadioButton defaultValue="exercise" />
      <StyledTitle level={3}>대시보드</StyledTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={90}
      />
      <Divider />
      <ItemContainer>
        <Space>
          <MainExerciseItems items={exerciseList} />
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
