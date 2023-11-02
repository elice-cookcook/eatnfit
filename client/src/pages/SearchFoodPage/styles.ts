import styled from "styled-components";

const Wrap = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecordHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchFoodMain = styled.div`
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

export { Wrap, RecordHeader, SearchFoodMain, LinkToAddFood, Items };
