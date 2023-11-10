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
          ) : Number(data?.length) <= 0 && !addPlan ? (
            <div style={{ marginTop: "120px" }}>등록된 계획이 없습니다.</div>
          ) : (
            <PlanCheckboxes items={data} />
          )}
          {addPlan && <AddPlanCheckbox setAddPlan={setAddPlan} />}
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
