import { Container, StyledCheckbox } from "./styles";
import { CloseOutlined } from "@ant-design/icons";

type PlanCheckboxesType = {
  items: string[];
};
export default function PlanCheckboxes({ items }: PlanCheckboxesType) {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <Container key={idx}>
            <StyledCheckbox>{item}</StyledCheckbox>
            <CloseOutlined style={{ color: "#89cff3" }} />
          </Container>
        );
      })}
    </>
  );
}
