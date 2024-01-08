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
import { format } from "date-fns";

const MainPage = () => {
  const dispatch = useDispatch();

  const selectedMenu = useSelector(
    (state: RootState) => state.menu.selectedMenu
  );

  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { data: dailyKcal } = useGetDailyKcal(format(activeDay, "yyyyMMdd"));

  return (
    <Container>
      <MainCalendar />
      <DateTitle>{getFormatDate(activeDay)}</DateTitle>
      <Dashboard
        title={["오늘 / 목표 몸무게", "섭취 칼로리", "소모 칼로리"]}
        description={[
          ``,
          `${dailyKcal?.dayKcal.toFixed(1) || 0}kcal`,
          `-${dailyKcal?.dayComsumedKcal.toFixed(1) || 0}kcal`,
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
