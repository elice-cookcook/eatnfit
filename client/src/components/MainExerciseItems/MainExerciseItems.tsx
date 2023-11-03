import React from "react";
import {
  FlexBox,
  StyledDivider,
  StyledList,
  TimeText,
  TypeLabel,
} from "./styles";

type MainExerciseItemsType = {
  items: {
    name: string;
    type: string;
    time: string;
    kcal: number;
  }[];
};
export default function MainExerciseItems({ items }: MainExerciseItemsType) {
  return (
    <StyledList>
      {items.map((item, idx) => (
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
