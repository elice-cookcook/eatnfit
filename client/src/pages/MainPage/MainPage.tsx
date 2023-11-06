import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { RootState, setSelectedMenu } from "../../redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: RootState) => state.menu.selectedMenu
  );
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const [currentWeight, setCurrentWeight] = useState(70.5); // 임시 현재 몸무게
  const [goalWeight, setGoalWeight] = useState(65.0);

  return (
    <Container>
      <MainCalendar />

      <DateTitle>{getFormatDate(activeDay)}</DateTitle>
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
      <MainRadioButton
        value={selectedMenu}
        onChange={(menu) => dispatch(setSelectedMenu(menu))}
      />
      {selectedMenu === "food" ? (
        <MainFood />
      ) : selectedMenu === "exercise" ? (
        <MainExercise />
      ) : (
        <MainPlan />
      )}
    </Container>
  );
};

export default MainPage;
