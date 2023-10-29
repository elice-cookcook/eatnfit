import { WrappedSearchItems, Context, Calory, Image } from "./styles";
import AddImg from "../../img/footerPlus.png";

type SearchItemsProps = {
  items: { name: string; calory?: number }[];
};

const SearchItems: React.FC<SearchItemsProps> = (props) => {
  return props.items.map((item) => (
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
};

export default SearchItems;
