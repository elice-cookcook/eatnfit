import { Divider, Spin } from "antd";
import { Dashboard, FoodChart, MainFoodItems } from "..";
import { useGetAllMeal } from "../../hooks";
import { Container, FlexBox, ItemContainer, Space } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export default function MainFood() {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { data, isLoading } = useGetAllMeal(activeDay);
  type FoodListType = {
    _id: string;
    type: string;
    time: string;
    name: string;
    kcal: number;
    count: number;
  };
  const mealType = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];
  const foodList: FoodListType[][] = [];
  const kcal: number[] = [];
  const carbohydrate: number[] = [];
  const protein: number[] = [];
  const fat: number[] = [];

  if (!isLoading) {
    data?.map((item) => {
      item.items.map((list) => {
        foodList.push([
          {
            _id: item._id,
            type: mealType[item.meal_type],
            time: `${String(item.time).slice(0, 2)}:${String(item.time).slice(
              2
            )}`,
            name: list.item,
            kcal: list.kcal,
            count: list.count,
          },
        ]);
      });
      kcal.push(item.total_kcal);
      carbohydrate.push(item.total_carbohydrate);
      protein.push(item.total_protein);
      fat.push(item.total_fat);
    });
  }
  const [totalCarbohydrate, totalProtein, totalFat] = [
    carbohydrate,
    protein,
    fat,
  ].map((item) => item.reduce((acc, cur) => acc + cur, 0));
  console.log(data);
  return (
    <Container>
      {data && data.length > 0 ? (
        <>
          <FlexBox>
            <Dashboard
              title={["탄수화물", "단백질", "지방"]}
              description={[
                `${totalCarbohydrate}g`,
                `${totalProtein}g`,
                `${totalFat}g`,
              ]}
              width={55}
              color={["#ff6384", "#36a2eb", "#47c83e"]}
            />
            <FoodChart
              description={[totalCarbohydrate, totalProtein, totalFat]}
            />
          </FlexBox>
          <Divider />
          <ItemContainer>
            {isLoading ? (
              <Spin />
            ) : (
              <Space>
                <MainFoodItems items={foodList} totalKcal={kcal} />
              </Space>
            )}
          </ItemContainer>
        </>
      ) : (
        <>식단 기록을 추가해보세요!</>
      )}
    </Container>
  );
}
