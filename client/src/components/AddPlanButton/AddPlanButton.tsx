import { PlusCircleOutlined } from "@ant-design/icons";
import { Container, StyledTitle } from "./styles";

export default function AddPlanButton() {
  return (
    <Container>
      <PlusCircleOutlined />
      <StyledTitle level={4}>계획을 추가해보세요.</StyledTitle>
    </Container>
  );
}
