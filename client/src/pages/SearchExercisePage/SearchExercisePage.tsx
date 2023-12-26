import {
  Wrap,
  SearchHeader,
  SearchMain,
  LinkToAddFood,
  Items,
  PTag,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SearchInput,
  LongBtn,
  SearchAddItem,
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

  // 선택한 아이템들의 이름을 담는 상태
  const [selectedItemNames, setSelectedItemNames] = useState<
    (string | undefined)[]
  >([]);
  const nav = useNavigate();

  // 아이템 삭제
  const handleDeleteItem = (idx: number) => {
    const updatedItemNames = [...selectedItemNames];
    updatedItemNames.splice(idx, 1);
    setSelectedItemNames(updatedItemNames);
  };

  const handlePost = () => {
    const exerciseNameToSend =
      selectedItemNames.length > 0 ? selectedItemNames[0] : "";
    // 기록 페이지에 운동 이름 전달
    nav("/exerciserecord", { state: { exerciseName: exerciseNameToSend } });
  };

  return (
    <Wrap>
      <SearchHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={handlePost} />
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
        <SearchAddItem
          selectedItemNames={selectedItemNames}
          onDeleteItem={handleDeleteItem}
        />
        {selectedItemNames.length > 1 ? (
          <PTag>
            보다 정확한 소모 칼로리 계산을 위해 한가지만 선택해주세요☺️
          </PTag>
        ) : (
          ""
        )}
        {isLoading ? (
          <Spin style={{ marginTop: "100px", marginLeft: "200px" }} />
        ) : (
          <Items>
            <SearchItems
              items={items}
              selectedItemNames={selectedItemNames}
              onAddItem={setSelectedItemNames}
            />
          </Items>
        )}
      </SearchMain>
      <Footer />
    </Wrap>
  );
}
