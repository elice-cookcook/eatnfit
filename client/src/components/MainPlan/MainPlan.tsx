import { Spin } from "antd";
import { AddPlanButton, Footer, PlanCheckboxes } from "..";
import { useGetAllPlan } from "../../hooks";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";

export default function MainPlan() {
  const { data, isLoading } = useGetAllPlan("20231031");
  return (
    <Container>
      <AddPlanButton />
      <ItemContainer>
        <Space>
          {isLoading ? (
            <Spin style={{ marginTop: "100px" }} />
          ) : (
            <PlanCheckboxes items={data?.map((item) => item.content)} />
          )}
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
