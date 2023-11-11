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
} from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  AddedItems,
  Footer,
} from "../../components";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { FoodRecord } from "../../types";

export default function FoodRecordPage() {
  const meal = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];
  const addItem = [
    { name: "단호박샐러드", calory: 940, quantity: 1 },
    { name: "고구마", calory: 320, quantity: 1 },
  ];

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [showImgDiv, setShowImgDiv] = useState<boolean>(true);
  const [time, setTime] = useState<string>("");
  const [mealType, setMealType] = useState(0); // 음식 타입

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

  const handleAddFood = () => {
    console.log("temp function");
  };
  const selectedFood = useSelector((state: RootState) => state.food);
  const calculateTotal = (
    selectedFood: FoodRecord[],
    property: keyof FoodRecord
  ) =>
    selectedFood
      ?.map((item) => Number(item[property]) * Number(item.quantity))
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
            <img ref={imageRef} />
            <button onClick={() => setShowImgDiv(true)}>사진 변경하기</button>
          </SelectImage>
        )}

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
        <Calory>
          <h4>영양성분</h4>
          <Left>
            <div className="first">
              <h5>칼로리</h5>
              <input value={`${totalKcal} kcal` || ""} readOnly />
            </div>
            <div className="second">
              <h5>단백질</h5>
              <input value={`${totalProtein.toFixed(1)} g` || ""} readOnly />
            </div>
          </Left>
          <Right>
            <div className="first">
              <h5>탄수화물</h5>
              <input
                value={`${totalCarbohydrate.toFixed(1)} g` || ""}
                readOnly
              />
            </div>
            <div className="second">
              <h5>지방</h5>
              <input value={`${totalFat.toFixed(1)} g` || ""} readOnly />
            </div>
          </Right>
        </Calory>
        <Link to="/foodrecord/search">
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
