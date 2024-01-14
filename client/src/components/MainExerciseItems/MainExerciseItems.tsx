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

  const linkToDetailPage = (date: string, idx: number) => {
    navigate(`${ROUTE.EXERCISE_DETAIL_PAGE.link}/${date}/${idx}`);
    document.getElementById("root")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledList>
      {items?.map((item, idx) => (
        <Container key={idx} onClick={() => linkToDetailPage(item.date, idx)}>
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
