import React from "react";
import {
  FlexBox,
  StyledDivider,
  StyledList,
  TimeText,
  TypeLabel,
} from "./styles";

type MainExerciseItemsType = {
  items?: {
    name: string;
    type: string;
    time: string;
    kcal: number;
  }[];
};
export default function MainExerciseItems({ items }: MainExerciseItemsType) {
  if (items?.length === 0) {
    return <div>운동 기록을 추가해보세요!</div>;
  }
  return (
    <StyledList>
      {items?.map((item, idx) => (
        <React.Fragment key={idx}>
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
        </React.Fragment>
      ))}
    </StyledList>
  );
}
