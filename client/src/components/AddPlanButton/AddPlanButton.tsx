import { PlusCircleOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";
import { Container, StyledTitle } from "./styles";

type AddPlanButtonType = {
  setAddPlan: Dispatch<SetStateAction<boolean>>;
};
export default function AddPlanButton({ setAddPlan }: AddPlanButtonType) {
  return (
    <Container onClick={() => setAddPlan(true)}>
      <PlusCircleOutlined />
      <StyledTitle level={4}>계획을 추가해보세요.</StyledTitle>
    </Container>
  );
}
