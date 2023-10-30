import React from "react";
import { FlexBox, StyledDivider, TimeText, TypeLabel } from "./styles";

type MainExerciseItemsType = {
  items: {
    title: string;
    type: string;
    time: string;
    kcal: number;
  }[];
};
export default function MainExerciseItems({ items }: MainExerciseItemsType) {
  return (
    <ul>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <li>
            <FlexBox>
              <FlexBox>
                <span>{item.title}</span>
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
    </ul>
  );
}
