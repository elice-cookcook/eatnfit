import {
  Wrap,
  RecordHeader,
  SearchFoodMain,
  LinkToAddFood,
  Items,
} from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SearchInput,
  LongBtn,
  SearchItems,
  Footer,
} from "../../components";

export default function SearchFoodPage() {
  const items = [
    { name: "단호박샐러드", calory: 940 },
    { name: "고구마", calory: 320 },
    { name: "닭가슴살", calory: 427 },
    { name: "현미밥", calory: 500 },
    { name: "단호박샐러드", calory: 940 },
    { name: "고구마", calory: 320 },
    { name: "닭가슴살", calory: 427 },
    { name: "현미밥", calory: 500 },
    { name: "단호박샐러드", calory: 940 },
    { name: "고구마", calory: 320 },
    { name: "닭가슴살", calory: 427 },
    { name: "현미밥", calory: 500 },
  ];

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn />
      </RecordHeader>
      <SearchFoodMain>
        <h2>음식 검색</h2>
        <SearchInput text="음식" />
        <LinkToAddFood>
          <Link to="/foodrecord/add">
            <LongBtn text="직접 추가하기(음식명, 칼로리, 탄단지)" />
          </Link>
        </LinkToAddFood>
        <Items>
          <SearchItems items={items} />
        </Items>
      </SearchFoodMain>
      <Footer />
    </Wrap>
  );
}