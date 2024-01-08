import { useDispatch, useSelector } from "react-redux";
import {
  Dashboard,
  Footer,
  MainCalendar,
  MainExercise,
  MainFood,
  MainPlan,
  MainRadioButton,
} from "../../components";
import { Container, DateTitle } from "./styles";
import { getFormatDate } from "../../utils";
import { RootState, setSelectedMenu } from "../../redux";
import { useGetDailyKcal } from "../../hooks";

const MainPage = () => {
  const dispatch = useDispatch();

  const selectedMenu = useSelector(
    (state: RootState) => state.menu.selectedMenu
  );

  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { data: dailyKcal } = useGetDailyKcal(activeDay);

  return (
    <Container>
      <MainCalendar />
      <DateTitle>{getFormatDate(activeDay)}</DateTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={[
          ``,
          `${dailyKcal?.dayKcal || 0}kcal`,
          `-${dailyKcal?.dayComsumedKcal || 0}kcal`,
        ]}
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
      <Footer />
    </Container>
  );
};

export default MainPage;
