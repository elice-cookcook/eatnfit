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
  const [currentWeight, setCurrentWeight] = useState(70.5); // 임시 현재 몸무게
  const [goalWeight, setGoalWeight] = useState(65.0);

  return (
    <Container>
      <MainCalendar value={activeday} onChange={setActiveDay} />

      <DateTitle>{getFormatDate(activeday)}</DateTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={[
          `${currentWeight}kg / ${goalWeight}kg`,
          "1,250kcal",
          "-200kcal",
        ]}
        width={85}
        weight1={currentWeight}
        weight2={goalWeight}
        onChange1={(e) => setCurrentWeight(parseFloat(e.target.value))}
        onChange2={(e) => setGoalWeight(parseFloat(e.target.value))}
      />
      <MainRadioButton defaultValue={radioValue} onChange={setRadioValue} />
      {radioValue === "food" ? (
        <MainFood />
      ) : radioValue === "exercise" ? (
        <MainExercise />
      ) : (
        <MainPlan />
      )}
    </Container>
  );
};

export default MainPage;
