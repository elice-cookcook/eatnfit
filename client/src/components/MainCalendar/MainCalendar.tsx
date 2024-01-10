import Calendar from "react-calendar";
import { CalendarWrapper, Dot, DotWrapper, Line } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setActiveDay } from "../../redux";
import { useEffect, useState } from "react";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";
import { useGetAllExerciseByDate } from "../../hooks/getAllExerciseByDates";
import { useGetAllMealByDate } from "../../hooks/getAllMealByDates";
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from "date-fns";

const MainCalendar = () => {
  const [daysWithMeal] = useState(new Set<string>());
  const [daysWithExercise] = useState(new Set<string>());

  const dispatch = useDispatch();

  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const onChangeToday = (newDate: LooseValue) => {
    dispatch(setActiveDay(new Date(newDate!.toString()) || new Date()));
  };

  // 현재 보고있는 달의 날짜들을 리턴하는 함수 (예: 2024년 1월 캘린더 => 20240101~20240131  리턴)
  const getDatesInMonth = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const eachDay = eachDayOfInterval({ start, end });

    return eachDay.map((day) => format(day, "yyyyMMdd"));
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
        value={format(activeDay, "yyyy-MM-dd")}
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate)
            setDatesInMonth(getDatesInMonth(activeStartDate));
        }}
        tileContent={({ date }) => {
          const dots = [];
          if (daysWithMeal.has(format(date, "yyyyMMdd")))
            dots.push(<Dot key={"meal" + date.getTime()} className="food" />);
          if (daysWithExercise.has(format(date, "yyyyMMdd")))
            dots.push(
              <Dot key={"exercise" + date.getTime()} className="exercise" />
            );
          return <DotWrapper>{dots}</DotWrapper>;
        }}
        formatDay={(_, date) => format(date, "dd")} //"일" 제거
      />
      <Line />
    </CalendarWrapper>
  );
};

export default MainCalendar;
