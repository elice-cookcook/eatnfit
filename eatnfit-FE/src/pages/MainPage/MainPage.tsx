import { useState } from "react";
import { Dashboard, MainCalendar, MainRadioButton } from "../../components";
import { Container, StyledTitle } from "./styles";
import { getFormatDate } from "../../utils";

const MainPage = () => {
  const [activeday, setActiveDay] = useState(new Date());

  return (
    <Container>
      <MainCalendar value={activeday} onChange={setActiveDay} />

      <StyledTitle level={4}>{getFormatDate(activeday)}</StyledTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={90}
      />
      <MainRadioButton defaultValue="food" />
    </Container>
  );
};

export default MainPage;
