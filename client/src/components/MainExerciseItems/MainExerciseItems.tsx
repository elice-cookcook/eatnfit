import { ROUTE } from "../../routes/Route";
import {
  Container,
  FlexBox,
  StyledDivider,
  StyledList,
  TimeText,
  TypeLabel,
} from "./styles";
import { useNavigate } from "react-router-dom";

type MainExerciseItemsType = {
  items?: {
    name: string;
    type: string;
    time: string;
    kcal: number;
    date: string;
  }[];
};
export default function MainExerciseItems({ items }: MainExerciseItemsType) {
  const navigate = useNavigate();

  if (items?.length === 0) {
    return <div>운동 기록을 추가해보세요!</div>;
  }

  return (
    <StyledList>
      {items?.map((item, idx) => (
        <Container
          key={idx}
          onClick={() =>
            navigate(`${ROUTE.EXERCISE_DETAIL_PAGE.link}/${item.date}/${idx}`)
          }
        >
          <li>
            <FlexBox>
              <FlexBox>
                <span>{item.name}</span>
                <TypeLabel>{item.type}</TypeLabel>
                <TimeText>{item.time}</TimeText>
              </FlexBox>
              <span>
                -<strong>{item.kcal}</strong>kcal
              </span>
            </FlexBox>
          </li>
          <StyledDivider />
        </Container>
      ))}
    </StyledList>
  );
}
