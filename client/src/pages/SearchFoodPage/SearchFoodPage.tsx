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
import { useGetAllFoods } from "../../hooks";
import { Foods } from "../../types";

export default function SearchFoodPage() {
  // 전체 음식 데이터 조회
  const { data, isLoading }: { data: Foods[]; isLoading: boolean } =
    useGetAllFoods();
  if (isLoading) return;

  const items = data.map((item) => {
    return {
      id: item._id,
      name: item.name,
      calory: item.kcal,
    };
  });

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
