import { useSelector } from "react-redux";
import { ROUTE } from "../../routes/Route";
import {
  Container,
  Contents,
  FlexBox,
  StyledList,
  StyledTitle,
  TitleBlock,
  Image,
  Space,
  Time,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux";
import { Meal } from "../../types";

type MainFoodItemsType = {
  items: Meal[];
  totalKcal: number[];
};

export default function MainFoodItems({ items, totalKcal }: MainFoodItemsType) {
  const nav = useNavigate();
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const mealType = ["아침", "아점", "점심", "간식", "점저", "저녁", "야식"];

  return items.map((item, idx) => (
    <Container
      key={idx}
      onClick={() => nav(`${ROUTE.FOOD_DETAIL_PAGE.link}/${activeDay}/${idx}`)}
    >
      <Image src={item.image_url}></Image>
      <Contents>
        <TitleBlock>
          <StyledTitle level={4}>{mealType[item.meal_type]}</StyledTitle>
          <Time>{`${String(item.time).slice(0, 2)}:${String(item.time).slice(
            2
          )}`}</Time>
        </TitleBlock>
        <StyledList>
          {item.items.map((list, idx) => (
            <li key={idx}>
              <FlexBox>
                <strong>{list.item}</strong>- {list.kcal}kcal
                <span>{list.count}개</span>
              </FlexBox>
            </li>
          ))}
          <Space>
            총합 <strong>{totalKcal[idx]}</strong>kcal
          </Space>
        </StyledList>
      </Contents>
    </Container>
  ));
}
