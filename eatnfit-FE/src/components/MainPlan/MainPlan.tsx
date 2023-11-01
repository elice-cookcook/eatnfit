import { Divider } from "antd";
import { AddPlanButton, Footer, PlanCheckboxes } from "..";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";

export default function MainPlan() {
  const checkboxes = [
    "공복 줄넘기",
    "식단 잘 챙겨먹기",
    "영양제 먹기",
    "군것질 안하기",
  ];
  return (
    <Container>
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
