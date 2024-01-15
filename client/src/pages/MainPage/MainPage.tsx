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

  const onRadiioChange = (menu: string) => {
    dispatch(setSelectedMenu(menu));
    document.getElementById("root")?.scrollTo({
      top: 420,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <MainCalendar />
      <DateTitle>{getFormatDate(activeDay.toLocaleDateString())}</DateTitle>
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
        onChange={(menu) => onRadiioChange(menu)}
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
