import {
  Wrap,
  RecordHeader,
  SearchFoodMain,
  LinkToAddFood,
  Items,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SearchInput,
  LongBtn,
  SearchItems,
  Footer,
  SearchAddItem,
} from "../../components";
import { Spin } from "antd";
import { useState, useEffect, SetStateAction } from "react";
import {
  useGetAllFoods,
  useSearchFoodNames,
  useRefreshAllFoods,
} from "../../hooks";
import { Foods } from "../../types";

export default function SearchFoodPage() {
  const [searchText, setSearchText] = useState<string>(""); // 검색창
  const [searchItems, setSearchItems] = useState<Foods[]>([]); // 검색결과 저장(배열)

  const { data: allFoodsData = [], isLoading } = useGetAllFoods(); // 전체 데이터
  const { data: searchData = [] } = useSearchFoodNames(searchText); // 검색 데이터
  const refreshAllFoods = useRefreshAllFoods(); // 전체 데이터 새로고침
  const navigate = useNavigate();
  // 페이지가 처음 로드될 때 => 전체 데이터
  useEffect(() => {
    if (isLoading) {
      <Spin style={{ marginTop: "100px" }} />;
    } else {
      setSearchItems(allFoodsData);
    }
  }, [isLoading, allFoodsData]);

  const [selectedItemNames, setSelectedItemNames] = useState<
    (string | undefined)[]
  >([]);
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
        setSearchItems(allFoodsData);
      }
    }
  };
  const handleSubmit = () => {
    const updatedItemNames: SetStateAction<(string | undefined)[]> = [];
    setSelectedItemNames(updatedItemNames);
    navigate("/foodrecord");
  };
  // 아이템 삭제
  const handleDeleteItem = (idx: number) => {
    const updatedItemNames = [...selectedItemNames];
    updatedItemNames.splice(idx, 1);
    setSelectedItemNames(updatedItemNames);
  };

  const items = searchItems.map((item) => {
    return {
      id: item._id,
      name: item.name,
      calory: item.kcal,
      carbohydrate: item.carbohydrate,
      protein: item.protein,
      fat: item.fat,
      quantity: 1,
    };
  });

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn onSubmit={() => handleSubmit()} />
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
        <SearchAddItem
          selectedItemNames={selectedItemNames}
          onDeleteItem={handleDeleteItem}
        />
        <Items>
          <SearchItems
            items={items}
            selectedItemNames={selectedItemNames}
            onAddItem={setSelectedItemNames}
          />
        </Items>
      </SearchFoodMain>
      <Footer />
    </Wrap>
  );
}
