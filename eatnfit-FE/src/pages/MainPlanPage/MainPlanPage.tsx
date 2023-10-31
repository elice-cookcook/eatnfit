import { Divider } from "antd";
import {
  AddPlanButton,
  Dashboard,
  Footer,
  MainRadioButton,
  PlanCheckboxes,
} from "../../components";
import { Container, ItemContainer, StyledTitle } from "../MainFoodPage/styles";
import { Space } from "./styles";

export default function MainPlanPage() {
  const checkboxes = [
    "공복 줄넘기",
    "식단 잘 챙겨먹기",
    "영양제 먹기",
    "군것질 안하기",
  ];
  return (
    <Container>
      <MainRadioButton defaultValue="plan" />
      <StyledTitle level={3}>대시보드</StyledTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={90}
      />
      <Divider />
      <AddPlanButton />
      <ItemContainer>
        <Space>
          <PlanCheckboxes items={checkboxes} />
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
