import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { CalendarWrapper } from "./styles";
import moment from "moment";

const MainCalendar = () => {
  const [activeDay, setActiveDay] = useState(new Date());
  const onChangeToday = (newDate: any) => {
    setActiveDay(newDate);
    console.log(activeDay);
  };
  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChangeToday}
        value={activeDay}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
    </CalendarWrapper>
  );
};

export default MainCalendar;
