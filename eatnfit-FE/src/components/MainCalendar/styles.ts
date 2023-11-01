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

export { CalendarWrapper };
