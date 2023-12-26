import { Checkbox } from "antd";
import { usePatchPlan } from "../../hooks/patchPlan";
import { Plan } from "../../types";
import { DeletePlanButton } from "../deletePlanButton";
import { Container, Content } from "./styles";

type PlanCheckboxesType = {
  item?: Plan | undefined;
  activeDay: string;
};

export default function PlanCheckboxes({ item, activeDay }: PlanCheckboxesType) {
  const { mutate } = usePatchPlan(activeDay, item?._id, {
    content: item?.content,
    isComplete: item?.isComplete === 0 ? 1 : 0,
  });
  const handleChange = () => {
    mutate();
  };
  return (
    <Container>
      <Checkbox onChange={handleChange} checked={item?.isComplete === 0 ? true : false}>
        <Content isChecked={item?.isComplete === 0 ? true : false}>{item?.content}</Content>
      </Checkbox>
      <DeletePlanButton id={item?._id} />
    </Container>
  );
}
