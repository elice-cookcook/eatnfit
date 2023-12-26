import { Spin } from "antd";
import { useState } from "react";
import { AddPlanButton, Footer, PlanCheckboxes } from "..";
import { useGetAllPlan } from "../../hooks";
import { AddPlanCheckbox } from "../AddPlanCheckbox";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";

export default function MainPlan() {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const { data, isLoading } = useGetAllPlan(activeDay);
  const [addPlan, setAddPlan] = useState(false);
  return (
    <Container>
      <AddPlanButton setAddPlan={setAddPlan} />
      <ItemContainer>
        <Space>
          <>
            {isLoading ? (
              <Spin style={{ marginTop: "100px" }} />
            ) : Number(data?.length) <= 0 && !addPlan ? (
              <div style={{ marginTop: "120px" }}>등록된 계획이 없습니다.</div>
            ) : (
              data?.map((item) => {
                return <PlanCheckboxes item={item} activeDay={activeDay} />;
              })
            )}
            {addPlan && <AddPlanCheckbox setAddPlan={setAddPlan} activeDay={activeDay} />}
          </>
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
