import {
  Wrap,
  RecordHeader,
  Main,
  SelectImage,
  Category,
  Time,
  ShowAddeditems,
  ButtonContainer,
  Span,
  WrappedAddItems,
  Name,
  Count,
  Kcal,
} from "./styles";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  AddedItems,
  FoodRecordImage,
  FoodRecordCalory,
} from "../../components";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setFood } from "../../redux";
import {
  useGetAllMeal,
  useGetFoodByName,
  usePatchMeal,
  useDeleteMeal,
} from "../../hooks";
import { FoodRecord, MealContent } from "../../types";
import getFormatDay from "../../utils/getFormatDate";
import { message } from "antd";
import { ROUTE } from "../../routes/Route";

export default function FoodDetailPage() {
  const meal = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];

  const { date, idx } = useParams();
  const location = useLocation();
  const [dataId, setDataId] = useState("");
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [time, setTime] = useState<string>("");
  const [mealType, setMealType] = useState<number>(0);
  const [edit, setEdit] = useState(location?.state?.isEdit || false);

  const { data, isLoading } = useGetAllMeal(date || "");

  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const selectedFood = useSelector((state: RootState) => state.food);
  const targetFood = (!isLoading &&
    data &&
    data[parseInt(idx as string)].items) || [
    { item: "", count: 0, kcal: 0, _id: "" },
  ];
  const targetNames = targetFood && targetFood.map((item) => item.item);

  const foodData = useGetFoodByName(targetNames as string[])!.map(
    (item) => item[0]
  );

  const calculateTotal = (
    selectedFood: FoodRecord[],
    property: keyof FoodRecord
  ) =>
    selectedFood
      ?.map((item) => Number(item[property]) * Number(item["quantity"]))
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  const [totalKcal, setTotalKcal] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  useEffect(() => {
    if (data && date && (idx || idx === "0")) {
      const target = data[parseInt(idx)];
      setDataId(target._id);
      setImageUrl(target.image_url);
      setTime(
        String(target.time).slice(0, 2) +
          "시 " +
          String(target.time).slice(2) +
          "분"
      );
      setMealType(target.meal_type);
      setTotalKcal(target.total_kcal);
      setTotalProtein(target.total_protein);
      setTotalCarbohydrate(target.total_carbohydrate);
      setTotalFat(target.total_fat);
    }
  }, [data, idx, date, edit]);

  const newFood: {
    item: string;
    count: number;
    kcal: number;
  }[] = [];

  selectedFood.forEach((item) => {
    newFood.push({
      item: item.name as string,
      count: item.quantity as number,
      kcal: item.calory as number,
    });
  });

  const mealContent: MealContent = {
    time: Number(time.replace("시 ", "").replace("분", "")),
    meal_type: mealType,
    image_url: imageUrl,
    total_kcal: calculateTotal(selectedFood, "calory"),
    total_carbohydrate: calculateTotal(selectedFood, "carbohydrate"),
    total_fat: calculateTotal(selectedFood, "fat"),
    total_protein: calculateTotal(selectedFood, "protein"),
    items: newFood,
  };

  const patchMeal = usePatchMeal(date!, dataId, mealContent);
  const deleteMeal = useDeleteMeal(dataId, date!);

  const handlePatchMeal = () => {
    toggleEdit();
    patchMeal.mutate();
  };

  const handleDeleteMeal = () => {
    deleteMeal.mutate();
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const setDispatchFood = () => {
    const newFood: FoodRecord[] = [];
    targetFood?.forEach((item, idx) => {
      newFood.push({
        name: item.item,
        calory: item.kcal,
        quantity: item.count,
        protein: foodData[idx].protein,
        carbohydrate: foodData[idx].carbohydrate,
        fat: foodData[idx].fat,
      });
    });
    dispatch(setFood(newFood));
  };

  if (!date || !idx) {
    message.error("잘못된 접근입니다.");
  }

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        {edit ? (
          <ButtonContainer>
            <SubmitBtn
              onSubmit={() => {
                toggleEdit();
                dispatch(setFood([]));
              }}
              text="취소"
              color="pink"
            />
            <SubmitBtn onSubmit={handlePatchMeal} text="완료" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <SubmitBtn onSubmit={handleDeleteMeal} text="삭제" color="pink" />
            <SubmitBtn
              onSubmit={() => {
                toggleEdit();
                setDispatchFood();
              }}
              text="수정"
            />
          </ButtonContainer>
        )}
      </RecordHeader>
      <Main>
        <h2>{getFormatDay(date!)}의 식단기록</h2>
        {edit ? (
          <FoodRecordImage
            imageRef={imageRef}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        ) : (
          <SelectImage>
            <img ref={imageRef} src={imageUrl} />
          </SelectImage>
        )}

        <Category>
          <h4>분류</h4>
          {edit ? (
            <SelectBtn items={meal} value={mealType} onChange={setMealType} />
          ) : (
            <Span>{meal[mealType]}</Span>
          )}
        </Category>
        <Time>
          <h4>시간</h4>
          {edit ? (
            <input
              value={time || ""}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          ) : (
            <Span>{time}</Span>
          )}
        </Time>
        <FoodRecordCalory
          totalKcal={
            selectedFood.length === 0
              ? totalKcal
              : calculateTotal(selectedFood, "calory")
          }
          totalCarbohydrate={
            selectedFood.length === 0
              ? totalCarbohydrate
              : calculateTotal(selectedFood, "carbohydrate")
          }
          totalProtein={
            selectedFood.length === 0
              ? totalProtein
              : calculateTotal(selectedFood, "protein")
          }
          totalFat={
            selectedFood.length === 0
              ? totalFat
              : calculateTotal(selectedFood, "fat")
          }
        />
        {edit ? (
          <>
            <Link
              to={ROUTE.FOOD_RECORD_SEARCH_PAGE.link}
              state={{ isEdit: edit, idx: idx }}
            >
              <LongBtn text="+ 음식 검색하기" />
            </Link>
            {selectedFood.length > 0 && (
              <ShowAddeditems>
                <h4>추가한 음식</h4>
                <AddedItems items={selectedFood} />
              </ShowAddeditems>
            )}
          </>
        ) : (
          <ShowAddeditems>
            <h4>추가한 음식</h4>
            {targetFood &&
              targetFood.map((item, idx) => (
                <WrappedAddItems key={idx}>
                  <div>{idx + 1}.</div>
                  <Name>{item.item}</Name>
                  <Count>{item.count}개</Count>
                  <Kcal>{Number(item.kcal * Number(item.count))}kcal</Kcal>
                </WrappedAddItems>
              ))}
          </ShowAddeditems>
        )}
      </Main>
    </Wrap>
  );
}
