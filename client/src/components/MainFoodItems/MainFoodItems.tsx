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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDeleteMeal } from "../../hooks";
import { useState } from "react";

type MainFoodItemsType = {
  items: {
    _id: string;
    type: string;
    time: string;
    name: string;
    kcal: number;
    count: number;
  }[][];
  totalKcal: number[];
};
export default function MainFoodItems({ items, totalKcal }: MainFoodItemsType) {
  const [id, setId] = useState<string>("");
  const { mutate } = useDeleteMeal(id);

  const handleDeleteItem = (id: string) => {
    if (window.confirm("해당 기록을 삭제하시겠습니까?")) {
      setId(id);
      mutate();
    }
  };

  return (
    <>
      {items.map((item, idx) => {
        return (
          <Container key={idx}>
            <Image src="https://i.ibb.co/F3KM2tt/998-D65415-D2-FB70128.jpg"></Image>
            <Contents>
              <TitleBlock>
                <StyledTitle level={4}>{item[0].type}</StyledTitle>
                <Time>{item[0].time}</Time>
                <EditOutlined />
                <DeleteOutlined onClick={() => handleDeleteItem(item[0]._id)} />
              </TitleBlock>
              <StyledList>
                {item.map((list, idx) => {
                  return (
                    <li key={idx}>
                      <FlexBox>
                        <strong>{list.name}</strong>- {list.kcal}kcal
                        <span>{list.count}개</span>
                      </FlexBox>
                    </li>
                  );
                })}
                <Space>
                  총합 <strong>{totalKcal[idx]}</strong>kcal
                </Space>
              </StyledList>
            </Contents>
          </Container>
        );
      })}
    </>
  );
}
