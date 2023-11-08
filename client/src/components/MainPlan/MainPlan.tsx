import { Spin } from "antd";
import { useState } from "react";
import { AddPlanButton, Footer, PlanCheckboxes } from "..";
import { useGetAllPlan } from "../../hooks";
import { AddPlanCheckbox } from "../AddPlanCheckbox";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";

export default function MainPlan() {
  const { data, isLoading } = useGetAllPlan("20231031");
  const [addPlan, setAddPlan] = useState(false);
  return (
    <Container>
      <AddPlanButton setAddPlan={setAddPlan} />
      <ItemContainer>
        <Space>
          {isLoading ? (
            <Spin style={{ marginTop: "100px" }} />
          ) : (
            <PlanCheckboxes items={data?.map((item) => item.content)} />
          )}
          {addPlan && <AddPlanCheckbox setAddPlan={setAddPlan} />}
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
