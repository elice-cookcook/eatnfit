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

  const kcal: number[] = [];
  const carbohydrate: number[] = [];
  const protein: number[] = [];
  const fat: number[] = [];

  if (!isLoading && data) {
    data?.map((item) => {
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
                <MainFoodItems items={data} totalKcal={kcal} />
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
