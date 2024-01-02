import Calendar from "react-calendar";
import { CalendarWrapper, Dot, DotWrapper, Line } from "./styles";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setActiveDay } from "../../redux";
import { useEffect, useState } from "react";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";
import { useGetAllExerciseByDate } from "../../hooks/getAllExerciseByDates";
import { useGetAllMealByDate } from "../../hooks/getAllMealByDates";

const MainCalendar = () => {
  const [daysWithMeal] = useState(new Set<string>());
  const [daysWithExercise] = useState(new Set<string>());

  const dispatch = useDispatch();
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const onChangeToday = (newDate: LooseValue) => {
    dispatch(setActiveDay(moment(newDate?.toString()).format("YYYYMMDD")));
  };

  const getDatesInMonth = (date: Date) => {
    const dates: string[] = [];
    const startOfMonth = moment(date).clone().startOf("month");
    const endOfMonth = moment(date).clone().endOf("month");

    while (startOfMonth.isBefore(endOfMonth)) {
      dates.push(startOfMonth.format("YYYYMMDD"));
      startOfMonth.add(1, "days");
    }
    return dates;
  };

  const [datesInMonth, setDatesInMonth] = useState(getDatesInMonth(new Date()));

  const exerciseDataInMonth = useGetAllExerciseByDate(datesInMonth);
  const mealDataInMonth = useGetAllMealByDate(datesInMonth);

  useEffect(() => {
    datesInMonth.forEach((date, idx) => {
      if (exerciseDataInMonth[idx].data?.length) daysWithExercise.add(date);
      if (mealDataInMonth[idx].data?.length) daysWithMeal.add(date);
    });
  }, [
    datesInMonth,
    daysWithExercise,
    daysWithMeal,
    exerciseDataInMonth,
    mealDataInMonth,
  ]);

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChangeToday}
        value={moment(activeDay).format("YYYY-MM-DD")}
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate)
            setDatesInMonth(getDatesInMonth(activeStartDate));
        }}
        tileContent={({ date }) => {
          const dots = [];
          if (daysWithMeal.has(moment(date).format("YYYYMMDD")))
            dots.push(<Dot key={"meal" + date.getTime()} className="food" />);
          if (daysWithExercise.has(moment(date).format("YYYYMMDD")))
            dots.push(
              <Dot key={"exercise" + date.getTime()} className="exercise" />
            );
          return <DotWrapper>{dots}</DotWrapper>;
        }}
        formatDay={(_, date) => moment(date).format("DD")} //"일" 제거
      />
      <Line />
    </CalendarWrapper>
  );
};

export default MainCalendar;
