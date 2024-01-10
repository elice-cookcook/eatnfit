import { format } from "date-fns";
import { ko } from "date-fns/locale";

const getFormatDay = (date: string) => {
  try {
    return format(new Date(date), `yyyy년 MM월 dd일 eeee`, { locale: ko });
  } catch {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);

    const newDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    return format(newDate, `yyyy년 MM월 dd일 eeee`, { locale: ko });
  }
};

export default getFormatDay;
