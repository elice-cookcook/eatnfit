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

  const [activeday, setActiveDay] = useState(new Date());

  return (
    <Container>
      <MainCalendar value={activeday} onChange={setActiveDay} />

      <DateTitle>{getFormatDate(activeday)}</DateTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={["70.0kg / 65.0kg", "1,250kcal", "-200kcal"]}
        width={85}
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
