import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: 90%;
  padding: 5px 20px;
  .react-calendar {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    text-align: center;
  }
  .react-calendar__navigation {
    display: flex;
    margin: 10px;
  }
  .react-calendar__navigation button {
    border: none;
    color: #00a9ff;
    min-width: 44px;
    background: none;
    font-size: 24px;
    margin: 10px 0;
    padding: 10px;
  }
  .react-calendar__navigation button:enabled:hover {
    background-color: #f8f8fa;
  }
  abbr[title] {
    text-decoration: none;
    font-size: 18px;
  }
  .react-calendar__tile {
    background-color: transparent;
    border: none;
    padding: 10px;
    margin: 5px 0;
    font-size: 18px;
    height: 50px;
    width: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__tile--range {
    color: black;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #00a9ff;
    border-radius: 10px;
  }
  .react-calendar__tile--now {
    border-radius: 10px;
    text-decoration: underline;
    color: #00a9ff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #89cff3;
    border-radius: 10px;
    color: #00a9ff;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #89cff3;
    color: white;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.2;
  }
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin: 0 1px;
  &.food {
    background-color: #ff9eaa;
  }
  &.exercise {
    background-color: #7fe9de;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  margin: 1px 0;
  position: absolute;
  bottom: 5%;
`;

const Line = styled.div`
  border-top: 1px solid #00a9ff;
  margin: 40px auto;
  width: 50%;
`;
export { CalendarWrapper, Dot, DotWrapper, Line };
