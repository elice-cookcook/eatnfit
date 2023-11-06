import Calendar from "react-calendar";
import { CalendarWrapper, Dot, DotWrapper, Line } from "./styles";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setActiveDay } from "../../redux";

const MainCalendar = () => {
  const dispatch = useDispatch();
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const onChangeToday = (newDate: any) => {
    dispatch(setActiveDay(parseInt(moment(newDate).format("YYYYMMDD"))));
  };

  const daysWithFood = [
    "20231101",
    "20231102",
    "20231122",
    "20231110",
    "20231111",
    "20231121",
    "20231128",
    "20231030",
  ]; // 식단 기록이 있는 날짜들
  const daysWithExercise = [
    "20231102",
    "20231130",
    "20231110",
    "20231116",
    "20231119",
    "20231031",
  ]; // 운동 기록이 있는 날짜들

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChangeToday}
        value={moment(activeDay.toString()).format("YYYY-MM-DD")}
        tileContent={({ date }) => {
          const dots = [];
          if (daysWithFood.find((x) => x === moment(date).format("YYYYMMDD")))
            dots.push(<Dot key={date.getTime()} className="food" />);
          if (
            daysWithExercise.find((x) => x === moment(date).format("YYYYMMDD"))
          )
            dots.push(<Dot key={date.getTime() + 1} className="exercise" />);
          return <DotWrapper>{dots}</DotWrapper>;
        }}
        formatDay={(locale, date) => moment(date).format("DD")} //"일" 제거
      />
      <Line />
    </CalendarWrapper>
  );
};

export default MainCalendar;
