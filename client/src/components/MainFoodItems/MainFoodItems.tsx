import {
  Container,
  Contents,
  FlexBox,
  StyledList,
  StyledTitle,
  TitleBlock,
  Image,
  Space,
} from "./styles";

type MainFoodItemsType = {
  items: {
    type: string;
    time: string;
    name: string;
    kcal: number;
    count: number;
  }[][];
};
export default function MainFoodItems({ items }: MainFoodItemsType) {
  let totalKcal = 0;
  return (
    <>
      {items.map((item, idx) => {
        totalKcal = 0;
        return (
          <Container key={idx}>
            <Image src="https://i.ibb.co/F3KM2tt/998-D65415-D2-FB70128.jpg"></Image>
            <Contents>
              <TitleBlock>
                <StyledTitle level={4}>{item[0].type}</StyledTitle>
                <span>{item[0].time}</span>
              </TitleBlock>
              <StyledList>
                {item.map((list, idx) => {
                  totalKcal += list.kcal * list.count;
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
                  총합 <strong>{totalKcal}</strong>kcal
                </Space>
              </StyledList>
            </Contents>
          </Container>
        );
      })}
    </>
  );
}
