import { Link, useParams } from "react-router-dom";
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

import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  AddedItems,
  Footer,
} from "../../components";
import { useRef, useState } from "react";
import moment from "moment";
import { useGetAllMeal } from "../../hooks";
import { mealTypes } from "../../lib";
import { Foods, Meal } from "../../types";
const MealDetailPage = () => {
  type itemsType = {
    _id: string;
    item: string;
    count: number;
    kcal: number;
  };
  const { date, idx } = useParams();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [time, setTime] = useState<string>("");
  const [mealType, setMealType] = useState(0); // 음식 타입
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/F3KM2tt/998-D65415-D2-FB70128.jpg"
  );
  const [foodItems, setFoodItems] = useState<itemsType[]>([]);
  const { data, isSuccess } = useGetAllMeal(date || "");
  if (isSuccess) {
    const mealData = data![parseInt(idx!)];
    // setTime(`${mealData.time}`);
    // setMealType(mealData.meal_type);
    // setImageUrl(mealData.image_url);
    // setFoodItems(mealData.items);
  }
  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <button>삭제</button>
        <button>수정</button>
      </RecordHeader>
      <Main>
        <h2>{moment(date).format("MM월 DD일")} 식단기록</h2>
        {edit ? (
          <AddImg onClick={() => console.log()}>
            <input
              type="file"
              ref={fileInputRef}
              className="upload-img"
              accept="image/*"
              style={{ display: "none" }}
              onChange={() => console.log()}
            />
            <span>사진 등록하기</span>
          </AddImg>
        ) : (
          <SelectImage>
            <img src={imageUrl} />
          </SelectImage>
        )}

        <Category>
          <h4>분류</h4>
          <SelectBtn
            items={[`${mealTypes[mealType]}`]}
            value={mealType}
            onChange={setMealType}
          />
        </Category>
        <Time>
          <h4>시간</h4>
          {edit ? (
            <input
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          ) : (
            <span>{time.slice(0, 2)}</span>
          )}
        </Time>
        <Calory>
          <h4>영양성분</h4>
          <Left>
            <div className="first">
              <h5>칼로리</h5>
              <input value="0 kcal" />
            </div>
            <div className="second">
              <h5>단백질</h5>
              <input value="0 g" />
            </div>
          </Left>
          <Right>
            <div className="first">
              <h5>탄수화물</h5>
              <input value="0 g" />
            </div>
            <div className="second">
              <h5>지방</h5>
              <input value="0 g" />
            </div>
          </Right>
        </Calory>
        <Link to="/foodrecord/search">
          <LongBtn text="+ 음식 검색하기" />
        </Link>
        <ShowAddeditems>
          <span>추가한 음식</span>
          {/* <AddedItems items={["d"]} /> */}
        </ShowAddeditems>
      </Main>
      <Footer />
    </Wrap>
  );
};

export default MealDetailPage;
