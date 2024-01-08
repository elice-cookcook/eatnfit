import {
  Wrap,
  RecordHeader,
  Main,
  Category,
  Time,
  ShowAddeditems,
} from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  AddedItems,
  Footer,
  FoodRecordImage,
  FoodRecordCalory,
} from "../../components";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { FoodRecord } from "../../types";
import { ROUTE } from "../../routes/Route";
import { usePostMeal } from "../../hooks/postMeal";
import { message } from "antd";

export default function FoodRecordPage() {
  const meal = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];
  const [time, setTime] = useState<string>("");
  const [mealType, setMealType] = useState(0); // 음식 타입
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const [imageUrl, setImageUrl] = useState("");
  const { mutate } = usePostMeal(activeDay);

  // 시간
  useEffect(() => {
    const currentTime = getCurrentTime();
    setTime(currentTime);
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const selectedFood = useSelector((state: RootState) => state.food);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const handleAddFood = () => {
    const items: { item: string; count: number; kcal: number }[] = [];
    if (selectedFood.length < 1) {
      message.error("음식을 추가해주세요.");
      return;
    }
    selectedFood.forEach((item) => {
      items.push({
        item: item.name as string,
        count: item.quantity as number,
        kcal: item.calory as number,
      });
    });
    mutate({
      items: items,
      time: Number(getCurrentTime().replace(":", "")),
      meal_type: mealType,
      image_url: imageUrl,
      total_kcal: totalKcal,
      total_carbohydrate: totalCarbohydrate,
      total_fat: totalFat,
      total_protein: totalProtein,
    });
  };
  const calculateTotal = (
    selectedFood: FoodRecord[],
    property: keyof FoodRecord
  ) =>
    selectedFood
      ?.map((item) => Number(item[property]) * Number(item["quantity"]))
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  const totalKcal = calculateTotal(selectedFood, "calory");
  const totalProtein = calculateTotal(selectedFood, "protein");
  const totalCarbohydrate = calculateTotal(selectedFood, "carbohydrate");
  const totalFat = calculateTotal(selectedFood, "fat");
  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={handleAddFood} />
      </RecordHeader>
      <Main>
        <h2>10월 26일 식단기록</h2>
        <FoodRecordImage
          imageRef={imageRef}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
        <Category>
          <h4>분류</h4>
          <SelectBtn items={meal} value={mealType} onChange={setMealType} />
        </Category>
        <Time>
          <h4>시간</h4>
          <input
            defaultValue={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </Time>
        <FoodRecordCalory
          totalKcal={totalKcal}
          totalCarbohydrate={totalCarbohydrate}
          totalProtein={totalProtein}
          totalFat={totalFat}
        />
        <Link to={ROUTE.FOOD_RECORD_SEARCH_PAGE.link} state={{ isEdit: false }}>
          <LongBtn text="+ 음식 검색하기" />
        </Link>
        {selectedFood.length > 0 && (
          <ShowAddeditems>
            <span>추가한 음식</span>
            <AddedItems items={selectedFood} />
          </ShowAddeditems>
        )}
      </Main>
      <Footer />
    </Wrap>
  );
}
