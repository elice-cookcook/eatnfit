import styled from "styled-components";
import { Link } from "react-router-dom";
import Close from "../../components/record/Close";
import SubmitBtn from "../../components/record/SubmitBtn";
import SearchInput from "../../components/record/SearchInput";
import LongBtn from "../../components/record/LongBtn";
import SearchItems from "../../components/record/SearchItems";
import Footer from "../../components/common/Footer";

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
      <SearchHeader>
        <Close />
        <SubmitBtn />
      </SearchHeader>
      <Main>
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
      </Main>
      <Footer />
    </Wrap>
  );
}

const Wrap = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  & > h2 {
    margin: 0 0 10px;
    text-align: center;
  }
  padding: 0 28px;
`;

const LinkToAddFood = styled.div`
  margin: 0 10px;
`;

const Items = styled.div`
  height: 80vh;
  margin: 4px 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
