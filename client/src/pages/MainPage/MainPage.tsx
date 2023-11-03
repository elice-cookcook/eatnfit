import { useState } from "react";
import {
  Dashboard,
  MainCalendar,
  MainExercise,
  MainFood,
  MainPlan,
  MainRadioButton,
} from "../../components";
import { Container, DateTitle } from "./styles";
import { getFormatDate } from "../../utils";

const MainPage = () => {
  const [activeday, setActiveDay] = useState(new Date());
  const [radioValue, setRadioValue] = useState("food");

  return (
    <Container>
      <MainCalendar value={activeday} onChange={setActiveDay} />

      <DateTitle>{getFormatDate(activeday)}</DateTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={85}
      />
      <MainRadioButton defaultValue={radioValue} onChange={setRadioValue} />
      {radioValue === "food" ? (
        <MainFood />
      ) : radioValue === "exercise" ? (
        <MainExercise date={getFormatDate(activeday).replace(/[^0-9]/g, "")} />
      ) : (
        <MainPlan />
      )}
    </Container>
  );
};

export default MainPage;
