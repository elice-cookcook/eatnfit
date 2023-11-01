import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { CalendarWrapper } from "./styles";
import moment from "moment";

const MainCalendar = () => {
  const [activeDay, setActiveDay] = useState(new Date());

  const onChangeToday = (newDate: any) => {
    setActiveDay(newDate);
  };

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChangeToday}
        value={activeDay}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
      <p>{activeDay.toLocaleDateString()}</p>
    </CalendarWrapper>
  );
};

export default MainCalendar;
