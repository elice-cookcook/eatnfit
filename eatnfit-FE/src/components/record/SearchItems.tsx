import styled from "styled-components";
import AddImg from "../../img/footerPlus.png";

type SearchItemsProps = {
  items: { name: string; calory: number }[];
};

const SearchItems: React.FC<SearchItemsProps> = (props) => {
  return props.items.map((item) => (
    <WrappedSearchItems key={item.name}>
      <Name>{item.name}</Name>
      <Calory>{item.calory}kcal, 1회 제공량</Calory>
      <Image src={AddImg} width="24px" />
      <hr />
    </WrappedSearchItems>
  ));
};

export default SearchItems;

const WrappedSearchItems = styled.div`
  margin-top: 8px;
  position: relative;
`;

const Name = styled.div``;
const Calory = styled.div`
  font-size: 14px;
  color: gray;
`;

const Image = styled.img`
  flex: 1;
  position: absolute;
  top: 20%;
  right: 0;
`;
