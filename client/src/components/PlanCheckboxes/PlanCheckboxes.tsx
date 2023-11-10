import { Plan } from "../../types";
import { DeletePlanButton } from "../deletePlanButton";
import { Container, StyledCheckbox } from "./styles";

type PlanCheckboxesType = {
  items?: Plan[] | undefined;
};
export default function PlanCheckboxes({ items }: PlanCheckboxesType) {
  return (
    <>
      {items?.map((item, idx) => {
        return (
          <Container key={idx}>
            <StyledCheckbox>{item.content}</StyledCheckbox>
            <DeletePlanButton id={item._id} />
          </Container>
        );
      })}
    </>
  );
}
