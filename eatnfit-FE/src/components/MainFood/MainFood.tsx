import { Divider } from "antd";
import { Dashboard, FoodChart, Footer, MainFoodItems } from "..";
import { Container, FlexBox, ItemContainer, Space } from "./styles";

export default function MainFood() {
  const foodList = [
    [
      { type: "아침", time: "08:15", name: "삶은 계란", kcal: 90, count: 2 },
      { type: "아침", time: "08:15", name: "사과", kcal: 120, count: 1 },
    ],
    [
      { type: "점심", time: "13:15", name: "고구마", kcal: 110, count: 2 },
      { type: "점심", time: "13:15", name: "새우 샐러드", kcal: 120, count: 1 },
    ],
    // [
    //   { type: "간식", time: "16:15", name: "바나나", kcal: 80, count: 1 },
    //   { type: "간식", time: "16:15", name: "아몬드", kcal: 140, count: 1 },
    // ],
    [
      {
        type: "저녁",
        time: "18:15",
        name: "프로틴 쉐이크",
        kcal: 80,
        count: 1,
      },
      { type: "저녁", time: "18:15", name: "닭가슴살", kcal: 110, count: 1 },
    ],
  ];
  return (
    <Container>
      <FlexBox>
        <Dashboard
          title={["탄수화물", "단백질", "지방"]}
          description={["40g", "20g", "10g"]}
          width={50}
          color={["#ff6384", "#36a2eb", "#47c83e"]}
        />
        <FoodChart />
      </FlexBox>
      <Divider />
      <ItemContainer>
        <Space>
          <MainFoodItems items={foodList} />
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
