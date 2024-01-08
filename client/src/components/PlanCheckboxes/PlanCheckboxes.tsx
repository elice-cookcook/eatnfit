import { Checkbox } from "antd";
import { usePatchPlan } from "../../hooks/patchPlan";
import { Plan } from "../../types";
import { DeletePlanButton } from "../deletePlanButton";
import { Container, Content } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { format } from "date-fns";

type PlanCheckboxesType = {
  item?: Plan | undefined;
};

export default function PlanCheckboxes({ item }: PlanCheckboxesType) {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { mutate } = usePatchPlan(format(activeDay, "yyyyMMdd"), item?._id, {
    content: item?.content || "",
    isComplete: item?.isComplete === 0 ? 1 : 0,
  });

  const handleChange = () => {
    mutate();
  };

  return (
    <Container>
      <Checkbox
        onChange={handleChange}
        checked={item?.isComplete === 0 ? true : false}
      >
        <Content checked={item?.isComplete === 0 ? true : false}>
          {item?.content}
        </Content>
      </Checkbox>
      <DeletePlanButton id={item?._id} />
    </Container>
  );
}
