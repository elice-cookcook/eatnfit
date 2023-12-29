import moment from "moment";

const getFormatDay = (date: string) => {
  const mDate = moment(date);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return mDate.format(`YYYY년 MM월 DD일 ${days[mDate.day()]}요일`);
};

export default getFormatDay;
