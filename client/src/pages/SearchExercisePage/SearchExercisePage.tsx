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
import { Spin } from "antd";
import { useGetAllActivity } from "../../hooks";

export default function SearchExercisePage() {
  const { data, isLoading } = useGetAllActivity();

  const items = data?.map((item) => ({
    name: item.name,
  }));

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
        {isLoading ? (
          <Spin style={{ marginTop: "100px", marginLeft: "200px" }} />
        ) : (
          <Items>
            <SearchItems items={items} />
          </Items>
        )}
      </SearchMain>
      <Footer />
    </Wrap>
  );
}
