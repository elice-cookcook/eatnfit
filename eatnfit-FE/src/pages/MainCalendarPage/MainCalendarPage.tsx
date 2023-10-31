import { useState } from "react";
import { MainCalendar } from "../../components";
import { Wrapper } from "./styles";
import { TbChevronsDown } from "react-icons/tb";

export default function MainCalendarPage() {
  return (
    <Wrapper>
      <MainCalendar />
      <TbChevronsDown size={"40px"} />
    </Wrapper>
  );
}
