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
import { Spin } from "antd";
import { useState, useEffect } from "react";
import { useGetAllFoods, getAllFoodNames } from "../../hooks";
import { Foods } from "../../types";

export default function SearchFoodPage() {
  const [searchText, setSearchText] = useState<string>(""); // 검색창
  const [searchItems, setSearchItems] = useState<Foods[]>([]); // 검색결과 저장(배열)

  // 페이지가 처음 로드될 때 => 전체 데이터
  const { data = [], isLoading } = useGetAllFoods();

  useEffect(() => {
    if (isLoading) {
      <Spin style={{ marginTop: "100px" }} />;
    } else {
      setSearchItems(data);
    }
  }, [isLoading, data]);

  // 검색창 onChange
  const handleInputChange = (value: string) => {
    setSearchText(value);
  };

  // enter키
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      handleInputChange(value);
      const searchData = await getAllFoodNames(value); // 해당 음식으로 바로 GET 요청
      setSearchItems(searchData);
    }
  };

  /*
  // 음식 이름으로 조회
  const { data: searchData = [], isLoading: searchLoading } =
    useGetAllFoodNames(searchText);

  useEffect(() => {
    if (searchLoading) {
      <Spin style={{ marginTop: "100px" }} />;
    } else {
      setSearchItems(searchData);
    }
  }, [searchText, searchLoading, searchData]);
  */

  const items = searchItems.map((item) => {
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
        <SearchInput
          text="음식"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
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
