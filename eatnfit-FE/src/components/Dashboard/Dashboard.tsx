import { Divider } from "antd";
import React from "react";
import { Container, Contents, Label } from "./styles";

type DashboardType = {
  title: string[];
  description: string[];
  width: number;
};
export default function DashBoard({
  title,
  description,
  width,
}: DashboardType) {
  return (
    <>
      <Container style={{ width: `${width}%` }}>
        {title.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <Contents>
                <Label>{item}</Label>
                <span>{description[idx]}</span>
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
