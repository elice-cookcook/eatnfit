import { WrappedSearchItems, Context, Calory, Image } from "./styles";
import AddImg from "../../img/footerPlus.png";

type SearchItemsProps = {
  items?: { id?: string; name: string; calory?: number }[];
};

function SearchItems(props: SearchItemsProps) {
  if (props.items?.length === 0) {
    return (
      <div style={{ marginTop: 12, textAlign: "center" }}>
        검색 결과가 없습니다. 직접 추가해보세요!
      </div>
    );
  }
  return props.items?.map((item) => (
    <WrappedSearchItems key={item.name}>
      <Context>
        <div className="name">{item.name}</div>
        {item.calory && <Calory>{item.calory}kcal, 1회 제공량</Calory>}
      </Context>
      <Image>
        <img src={AddImg} width="24px" />
      </Image>
    </WrappedSearchItems>
  ));
}

export default SearchItems;
