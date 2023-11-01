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
import { useRef, useState } from "react";

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
      setShowImgDiv(false);
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn />
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
          <SelectBtn items={meal} />
        </Category>
        <Time>
          <h4>시간</h4>
          <input
            placeholder="00:00"
            value={time}
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
          <AddedItems items={addItem} />
        </ShowAddeditems>
      </Main>
      <Footer />
    </Wrap>
  );
}
