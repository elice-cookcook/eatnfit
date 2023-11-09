import { Wrap, SearchHeader, SearchMain, LinkToAddFood, Items } from "./styles";
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
import { useGetAllActivity } from "../../hooks";
import { useState } from "react";

export default function SearchExercisePage() {
  const { data, isLoading } = useGetAllActivity();

  const items = data?.map((item) => ({
    name: item.name,
  }));

  // 선택한 아이템들의 이름을 담는 상태
  const [selectedItemNames, setSelectedItemNames] = useState<string[]>([]);
  const nav = useNavigate();

  // 아이템 추가
  const handleAddItem = (itemNames: string[]) => {
    setSelectedItemNames(itemNames);
  };

  // 아이템 삭제
  const handleDeleteItem = (idx: number) => {
    const updatedItemNames = [...selectedItemNames];
    updatedItemNames.splice(idx, 1);
    setSelectedItemNames(updatedItemNames);
  };

  const handlePost = () => {
    // 운동만 1개로 제한
    if (selectedItemNames.length > 1) {
      alert("보다 정확한 소모 칼로리 계산을 위해 한가지만 선택해주세요☺️");
      return;
    }
    // 기록 페이지에 운동 이름 전달
    nav("/exerciserecord", { state: { exerciseName: selectedItemNames[0] } });
  };

  return (
    <Wrap>
      <SearchHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={handlePost} />
      </SearchHeader>
      <SearchMain>
        <h2>운동 검색</h2>
        <SearchInput text="운동" />
        <LinkToAddFood>
          <Link to="/exerciserecord/add">
            <LongBtn text="직접 추가하기(운동명, 시간)" />
          </Link>
        </LinkToAddFood>
        <SearchAddItem
          selectedItemNames={selectedItemNames}
          onDeleteItem={handleDeleteItem}
        />
        {isLoading ? (
          <Spin style={{ marginTop: "100px", marginLeft: "200px" }} />
        ) : (
          <Items>
            <SearchItems
              items={items}
              selectedItemNames={selectedItemNames}
              onAddItem={handleAddItem}
            />
          </Items>
        )}
      </SearchMain>
      <Footer />
    </Wrap>
  );
}
