import { Typography } from "antd";
import { Dashboard, MainRadioButton } from "../../components";
import { Container, FlexBox } from "./styles";

export default function MainPage() {
  const { Title } = Typography;
  return (
    <Container>
      <MainRadioButton />
      <Title level={3} style={{ textAlign: "left" }}>
        대시보드
      </Title>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={90}
      />
      <FlexBox>
        <Dashboard
          title={["탄수화물", "단백질", "지방"]}
          description={["40g", "20g", "10g"]}
          width={50}
        />
        <img
          src="https://i.ibb.co/Hdq97Xd/image.png"
          style={{ width: "110px" }}
        />
      </FlexBox>
    </Container>
  );
}
