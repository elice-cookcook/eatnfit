import { Checkbox } from "antd";
import { useState } from "react";
import { usePatchPlan } from "../../hooks/patchPlan";
import { Plan } from "../../types";
import { DeletePlanButton } from "../deletePlanButton";
import { Container, Content } from "./styles";

type PlanCheckboxesType = {
  item?: Plan | undefined;
};

export default function PlanCheckboxes({ item }: PlanCheckboxesType) {
  const [isChecked, setIsChecked] = useState(
    item?.isComplete === 0 ? true : false
  );
  const { mutate } = usePatchPlan("20231031", item?._id, {
    content: item?.content,
    isComplete: isChecked ? 1 : 0,
  });
  const handleChange = () => {
    setIsChecked(!isChecked);
    mutate();
  };
  return (
    <Container>
      <Checkbox onChange={handleChange} checked={isChecked}>
        <Content isChecked={isChecked}>{item?.content}</Content>
      </Checkbox>
      <DeletePlanButton id={item?._id} />
    </Container>
  );
}
