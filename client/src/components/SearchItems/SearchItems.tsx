import { WrappedSearchItems, Context, Calory, Image } from "./styles";
import AddImg from "../../img/footerPlus.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setFood } from "../../redux";
import { FoodRecord } from "../../types";

type SearchItemsProps = {
  items: {
    id?: string;
    name?: string;
    calory?: number;
    carbohydrate?: number;
    protein?: number;
    fat?: number;
  }[];
};

function SearchItems(props: SearchItemsProps) {
  const selectedFood = useSelector((state: RootState) => state.food);

  const dispatch = useDispatch();
  if (props.items?.length === 0) {
    return (
      <div style={{ marginTop: 12, textAlign: "center" }}>
        검색 결과가 없습니다. 직접 추가해보세요!
      </div>
    );
  }
  const handleAddItems = (item: FoodRecord) => {
    const newFood = [...selectedFood];
    if (newFood.length > 1) {
      const existingFood = newFood.find((food) => food.name === item.name);
      if (existingFood) {
        existingFood.quantity = Number(existingFood.quantity) + 1;
      } else {
        newFood.push(item);
      }
    } else newFood.push(item);
    dispatch(setFood(newFood));
  };
  return props.items?.map((item) => (
    <WrappedSearchItems key={item.name}>
      <Context>
        <div className="name">{item.name}</div>
        {item.calory && <Calory>{item.calory}kcal, 1회 제공량</Calory>}
      </Context>
      <Image>
        <img src={AddImg} width="24px" onClick={() => handleAddItems(item)} />
      </Image>
    </WrappedSearchItems>
  ));
}

export default SearchItems;
