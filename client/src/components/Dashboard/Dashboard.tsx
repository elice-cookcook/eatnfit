import { Divider } from "antd";
import React, { ChangeEvent } from "react";
import { Container, Contents, Label, Span } from "./styles";
import { EditWeightForm } from "..";

type DashboardType = {
  title: string[];
  description: string[];
  width: number;
  color?: string[];
  weight1?: number; // 현재몸무게
  weight2?: number; //목표몸무게
  onChange1?: (e: ChangeEvent<HTMLInputElement>) => void; // 현재 몸무게 변경
  onChange2?: (e: ChangeEvent<HTMLInputElement>) => void; // 목표 몸무게 변경
};
export default function DashBoard({
  title,
  description,
  width,
  color,
  weight1,
  weight2,
  onChange1,
  onChange2,
}: DashboardType) {
  return (
    <>
      <Container style={{ width: `${width}%` }}>
        {title.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <Contents>
                {color ? (
                  <Label color={color[idx]}>{item}</Label>
                ) : (
                  <Label>{item}</Label>
                )}
                <Span>
                  {weight1 && weight2 && onChange1 && onChange2 && idx === 0 ? (
                    <EditWeightForm
                      weight1={weight1}
                      weight2={weight2}
                      onChange1={onChange1}
                      onChange2={onChange2}
                    />
                  ) : (
                    description[idx]
                  )}
                </Span>
              </Contents>
              {idx !== 2 && (
                <Divider
                  key="divider"
                  style={{ height: "4vh" }}
                  type="vertical"
                />
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </>
  );
}
