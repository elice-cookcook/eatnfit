import { WrappedSearchItems, Calory, Image } from "./styles";
import AddImg from "../../img/footerPlus.png";

type SearchItemsProps = {
  items: { name: string; calory: number }[];
};

const SearchItems: React.FC<SearchItemsProps> = (props) => {
  return props.items.map((item) => (
    <WrappedSearchItems key={item.name}>
      <div className="name">{item.name}</div>
      <Calory>{item.calory}kcal, 1회 제공량</Calory>
      <Image src={AddImg} width="24px" />
      <hr />
    </WrappedSearchItems>
  ));
};

export default SearchItems;
