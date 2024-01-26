import { useDispatch, useSelector } from "react-redux";
import { WrappedSelectBtn } from "./styles";
import { RootState, setMealRecord } from "../../redux";

type SelectBtnProps = {
  items: string[];
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

function SelectBtn({ items, value, onChange }: SelectBtnProps) {
  const dispatch = useDispatch();
  const existedImageUrl = useSelector(
    (state: RootState) => state.mealRecord.image_url
  );
  const handleOnClickBtn = (index: number) => {
    onChange(index);
    dispatch(
      setMealRecord({
        image_url: existedImageUrl,
        meal_type: index,
      })
    );
  };

  return items.map((item, index) => (
    <WrappedSelectBtn
      key={item}
      style={{
        backgroundColor: value === index ? "#c2d9e5b3" : "#ddd",
        width: item.length >= 4 ? 70 : 60,
      }}
      onClick={() => handleOnClickBtn(index)}
    >
      {item}
    </WrappedSelectBtn>
  ));
}

export default SelectBtn;
