import { Wrap, SearchHeader, SearchMain, LinkToAddFood, Items } from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SearchInput,
  LongBtn,
  SearchItems,
  Footer,
} from "../../components";

export default function SearchExercisePage() {
  const items = [
    { name: "스쿼트" },
    { name: "캐치볼" },
    { name: "야구" },
    { name: "농구" },
    { name: "요가" },
    { name: "축구" },
    { name: "수영" },
    { name: "런지" },
    { name: "펜싱" },
    { name: "하이킹" },
    { name: "풋살" },
    { name: "하키" },
    { name: "걷기" },
    { name: "뛰기" },
  ];

  return (
    <Wrap>
      <SearchHeader>
        <CloseBtn />
        <SubmitBtn />
      </SearchHeader>
      <SearchMain>
        <h2>운동 검색</h2>
        <SearchInput text="운동" />
        <LinkToAddFood>
          <Link to="/exerciserecord/add">
            <LongBtn text="직접 추가하기(운동명, 시간)" />
          </Link>
        </LinkToAddFood>
        <Items>
          <SearchItems items={items} />
        </Items>
      </SearchMain>
      <Footer />
    </Wrap>
  );
}
