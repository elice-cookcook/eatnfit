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
import { useState, useEffect } from "react";
import {
  useGetAllActivity,
  useSearchActivityNames,
  useRefreshAllACtivity,
} from "../../hooks";
import { Activity } from "../../types";

export default function SearchExercisePage() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchItems, setSearchItems] = useState<Activity[]>([]);

  const { data: allActivityData = [], isLoading } = useGetAllActivity();
  const { data: searchData = [] } = useSearchActivityNames(searchText);
  const refreshAllFoods = useRefreshAllACtivity();

  // 페이지가 처음 로드될 때 => 전체 데이터
  useEffect(() => {
    if (isLoading) {
      <Spin style={{ marginTop: "100px" }} />;
    } else {
      setSearchItems(allActivityData);
    }
  }, [isLoading, allActivityData]);

  // 검색창 onChange
  const handleInputChange = (value: string) => {
    setSearchText(value);
  };

  // enter키
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      handleInputChange(value);
      if (value) {
        setSearchItems(searchData);
      } else {
        refreshAllFoods.mutate();
        setSearchItems(allActivityData);
      }
    }
  };

  const items = searchItems.map((item) => {
    return {
      name: item.name,
    };
  });

  return (
    <Wrap>
      <SearchHeader>
        <CloseBtn />
        <SubmitBtn />
      </SearchHeader>
      <SearchMain>
        <h2>운동 검색</h2>
        <SearchInput
          text="운동"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
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
