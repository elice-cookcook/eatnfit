import { Calory, Left, Right } from "./styles";

interface FoodRecordCaloryProps {
  totalKcal: number;
  totalProtein: number;
  totalCarbohydrate: number;
  totalFat: number;
}
export default function FoodRecordCalory({
  totalKcal,
  totalProtein,
  totalCarbohydrate,
  totalFat,
}: FoodRecordCaloryProps) {
  return (
    <Calory>
      <h4>영양성분</h4>
      <Left>
        <div className="first">
          <h5>칼로리</h5>
          <input value={`${totalKcal} kcal` || ""} readOnly />
        </div>
        <div className="second">
          <h5>단백질</h5>
          <input value={`${totalProtein.toFixed(1)} g` || ""} readOnly />
        </div>
      </Left>
      <Right>
        <div className="first">
          <h5>탄수화물</h5>
          <input value={`${totalCarbohydrate.toFixed(1)} g` || ""} readOnly />
        </div>
        <div className="second">
          <h5>지방</h5>
          <input value={`${totalFat.toFixed(1)} g` || ""} readOnly />
        </div>
      </Right>
    </Calory>
  );
}
