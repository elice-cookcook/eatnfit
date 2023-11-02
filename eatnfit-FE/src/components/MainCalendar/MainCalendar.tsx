import Calendar from "react-calendar";
import { CalendarWrapper, Dot, DotWrapper, Line } from "./styles";
import moment from "moment";

type MainCalendarProps = {
  value: Date;
  onChange: React.Dispatch<React.SetStateAction<any>>; //setState의 타입
};

const MainCalendar = ({ value, onChange }: MainCalendarProps) => {
  const onChangeToday = (newDate: any) => {
    onChange(newDate);
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
        value={value}
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
