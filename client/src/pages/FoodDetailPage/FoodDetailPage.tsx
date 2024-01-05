import {
  Wrap,
  RecordHeader,
  Main,
  AddImg,
  SelectImage,
  Category,
  Time,
  Calory,
  Left,
  Right,
  ShowAddeditems,
  ButtonContainer,
  Span,
  WrappedAddItems,
  Name,
  Count,
  Kcal,
  CalSpan,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  AddedItems,
} from "../../components";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  useGetAllMeal,
  useGetFoodByName,
  usePatchMeal,
  useDeleteMeal,
} from "../../hooks";
import { MealContent, FoodRecord } from "../../types";
import getFormatDay from "../../utils/getFormatDate";

interface AddedItem {
  item: string;
  count: number;
  kcal: number;
}

export default function FoodDetailPage() {
  const meal = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];

  const { date, idx } = useParams();
  const [dataId, setDataId] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [showImgDiv, setShowImgDiv] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [mealType, setMealType] = useState<number>(0);
  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState<number>(0);
  const [totalProtein, setTotalProtein] = useState<number>(0);
  const [totalFat, setTotalFat] = useState<number>(0);
  const [addedItems, setAddedItems] = useState<AddedItem[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [edit, setEdit] = useState(false);

  const { data } = useGetAllMeal(date || "");

  const foodData = useGetFoodByName(names); // 음식 정보 불러오기

  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  useEffect(() => {
    if (data && date && (idx || idx === "0") && !edit) {
      const target = data[parseInt(idx)];
      setDataId(target._id);
      setShowImgDiv(false);
      setImgSrc(target.image_url);
      setTime(
        String(target.time).slice(0, 2) +
          "시 " +
          String(target.time).slice(2) +
          "분"
      );
      setMealType(target.meal_type);
      setTotalKcal(target.total_kcal);
      setTotalCarbohydrate(target.total_carbohydrate);
      setTotalProtein(target.total_protein);
      setTotalFat(target.total_fat);
      setAddedItems(target.items);
      const newNames = target.items.map((item) => item.item);
      setNames(newNames);
    }
  }, [data, idx, date, edit]);

  const mealContent: Meal = {
    time: parseInt(time.replace(":", "")),
    meal_type: mealType,
    // image: imageRef.current.src,
    total_kcal: totalKcal,
    total_carbohydrate: totalCarbohydrate,
    total_fat: totalFat,
    total_protein: totalProtein,
    // items: [
    //   {
    //     item: string,
    //     count: number,
    //     kcal: number,
    //   },
    // ],
  };

  const patchMeal = usePatchMeal(date!, dataId, mealContent);
  const deleteMeal = useDeleteMeal(dataId, date || activeDay);

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

  // 이미지 등록
  const handleAddImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (imageRef.current) {
          imageRef.current.src = event.target?.result as string;
        }
      };
      reader.readAsDataURL(selectedFile);
    }
    setShowImgDiv(false);
  };

  const selectedFood = useSelector((state: RootState) => state.food);
  const calculateTotal = (
    selectedFood: FoodRecord[],
    property: keyof FoodRecord
  ) =>
    selectedFood
      ?.map((item) => Number(item[property]) * Number(item.quantity))
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  const totalKcalEdit = calculateTotal(selectedFood, "calory");
  const totalProteinEdit = calculateTotal(selectedFood, "protein");
  const totalCarbohydrateEdit = calculateTotal(selectedFood, "carbohydrate");
  const totalFatEdit = calculateTotal(selectedFood, "fat");

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        {edit ? (
          <ButtonContainer>
            <SubmitBtn onSubmit={toggleEdit} text="취소" color="pink" />
            <SubmitBtn onSubmit={handlePatchMeal} text="완료" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <SubmitBtn onSubmit={handleDeleteMeal} text="삭제" color="pink" />
            <SubmitBtn onSubmit={toggleEdit} text="수정" />
          </ButtonContainer>
        )}
      </RecordHeader>
      <Main>
        <h2>{getFormatDay(date || activeDay)}의 식단기록</h2>
        {edit ? (
          <>
            {showImgDiv ? (
              <AddImg onClick={handleAddImgClick}>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="upload-img"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <span>사진 등록하기</span>
              </AddImg>
            ) : (
              <SelectImage>
                <img ref={imageRef} src={imgSrc} />
                <button
                  onClick={() => {
                    setShowImgDiv(true);
                  }}
                >
                  사진 삭제하기
                </button>
              </SelectImage>
            )}
          </>
        ) : (
          <SelectImage>
            <img ref={imageRef} src={imgSrc} />
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
        <Calory>
          <h4>영양성분</h4>
          <Left>
            <div className="first">
              <h5>칼로리</h5>
              {edit ? (
                <input defaultValue={`${totalKcalEdit} kcal`} readOnly />
              ) : (
                <CalSpan>{`${totalKcal} kcal`}</CalSpan>
              )}
            </div>
            <div className="second">
              <h5>단백질</h5>
              {edit ? (
                <input
                  defaultValue={`${totalProteinEdit.toFixed(1)} g`}
                  readOnly
                />
              ) : (
                <CalSpan>{`${totalProtein.toFixed(1)} g`}</CalSpan>
              )}
            </div>
          </Left>
          <Right>
            <div className="first">
              <h5>탄수화물</h5>
              {edit ? (
                <input
                  defaultValue={`${totalCarbohydrateEdit.toFixed(1)} g`}
                  readOnly
                />
              ) : (
                <CalSpan>{`${totalCarbohydrate.toFixed(1)} g`}</CalSpan>
              )}
            </div>
            <div className="second">
              <h5>지방</h5>
              {edit ? (
                <input defaultValue={`${totalFatEdit.toFixed(1)} g`} readOnly />
              ) : (
                <CalSpan>{`${totalFat.toFixed(1)} g`}</CalSpan>
              )}
            </div>
          </Right>
        </Calory>
        {edit ? (
          <>
            <Link to="/foodrecord/search">
              <LongBtn text="+ 음식 검색하기" />
            </Link>
            {selectedFood.length > 0 && (
              <ShowAddeditems>
                <span>추가한 음식</span>
                <AddedItems items={selectedFood} />
              </ShowAddeditems>
            )}
          </>
        ) : (
          <ShowAddeditems>
            <h4>추가한 음식</h4>
            {addedItems.map((item, idx) => (
              <WrappedAddItems key={idx}>
                <div>{idx + 1}.</div>
                <Name>{item.item}</Name>
                <Count>{item.count}개</Count>
                <Kcal>{item.kcal}kcal</Kcal>
              </WrappedAddItems>
            ))}
          </ShowAddeditems>
        )}
      </Main>
    </Wrap>
  );
}
