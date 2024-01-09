import { useSelector } from "react-redux";
import { ROUTE } from "../../routes/Route";
import { DeleteTwoTone } from "@ant-design/icons";
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
import { useDeleteMeal } from "../../hooks";
import { useState } from "react";
import { Popconfirm } from "antd";

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
  const [mealId, setMealId] = useState<string>("");
  const [isNavMoved, setNavMoved] = useState<boolean>(false);

  const deleteMeal = useDeleteMeal(mealId, activeDay);

  const handleOpenChange = (idx: number) => {
    const mealToDeleteId = items[idx]._id;
    setMealId(mealToDeleteId);
    setNavMoved(true);
  };

  const handleDeleteMeal = () => {
    if (mealId) deleteMeal.mutate();
  };

  return items.map((item, idx) => (
    <Container
      key={idx}
      onClick={() =>
        !isNavMoved &&
        nav(`${ROUTE.FOOD_DETAIL_PAGE.link}/${activeDay}/${idx}`, {
          state: { isEdit: false },
        })
      }
    >
      <Image src={item.image_url}></Image>
      <Contents>
        <TitleBlock>
          <StyledTitle level={4}>{mealType[item.meal_type]}</StyledTitle>
          <Time>{`${String(item.time).slice(0, 2)}:${String(item.time).slice(
            2
          )}`}</Time>
          <Popconfirm
            title="식단기록 삭제"
            description="식단 기록을 삭제하시겠습니까?"
            onConfirm={handleDeleteMeal}
            okText="네"
            cancelText="아니요"
          >
            <DeleteTwoTone
              onClick={(e) => {
                e.stopPropagation();
                handleOpenChange(idx);
              }}
            />
          </Popconfirm>
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
