import Calendar from "react-calendar";
import { CalendarWrapper, Dot, DotWrapper, Line } from "./styles";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setActiveDay } from "../../redux";
import { useEffect, useState } from "react";
import axios from "axios";

const MainCalendar = () => {
  const [daysWithMeal, setDaysWithMeal] = useState<string[]>([]);
  const [daysWithExercise, setDaysWithExercise] = useState<string[]>([]);

  const dispatch = useDispatch();
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const onChangeToday = (newDate: any) => {
    dispatch(setActiveDay(moment(newDate).format("YYYYMMDD")));
  };

  const getDatesInMonth = (date: string) => {
    let dates: string[] = [];
    const startOfMonth = moment(date).clone().startOf("month");
    const endOfMonth = moment(date).clone().endOf("month");

    while (startOfMonth.isBefore(endOfMonth)) {
      dates.push(startOfMonth.format("YYYYMMDD"));
      startOfMonth.add(1, "days");
    }
    return dates;
  };

  useEffect(() => {
    const fetchCheckData = async () => {
      let mealDays: string[] = []; // 식단 기록이 있는 날짜들
      let exerciseDays: string[] = []; // 운동 기록이 있는 날짜들
      const datesInMonth = getDatesInMonth(activeDay);

      for (const date of datesInMonth) {
        await axios.get(`/api/v1/meals/${date}`).then((res) => {
          if (res.data.data.length > 0) mealDays.push(date);
        });
        await axios.get(`/api/v1/exercises/${date}`).then((res) => {
          if (res.data.data.length > 0) {
            exerciseDays.push(date);
            console.log(date);
          }
        });
      }
      setDaysWithMeal(mealDays);
      setDaysWithExercise(exerciseDays);
    };

    fetchCheckData();
  }, [activeDay]);

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChangeToday}
        value={moment(activeDay).format("YYYY-MM-DD")}
        tileContent={({ date }) => {
          const dots = [];
          if (daysWithMeal.find((x) => x === moment(date).format("YYYYMMDD")))
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
