import { Divider } from "antd";
import React, { useState } from "react";
import { Container, Contents, InputWrapper, Label, Span } from "./styles";
import { TbEdit } from "react-icons/tb";

type DashboardType = {
  title: string[];
  description: string[];
  width: number;
  color?: string[];
  value1?: number; // 현재몸무게
  value2?: number; //목표몸무게
  onChange1?: React.Dispatch<React.SetStateAction<any>>; // 현재 몸무게 변경
  onChange2?: React.Dispatch<React.SetStateAction<any>>; // 목표 몸무게 변경
};
export default function DashBoard({
  title,
  description,
  width,
  color,
  value1,
  value2,
  onChange1,
  onChange2,
}: DashboardType) {
  const [edit, setEdit] = useState(false);
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
                  {value1 && value2 && idx === 0 && edit ? (
                    <InputWrapper>
                      <input value={value1} onChange={onChange1}></input>
                      <span>kg /</span>
                      <input value={value2} onChange={onChange2}></input>
                      <span>kg</span>
                    </InputWrapper>
                  ) : (
                    description[idx]
                  )}
                  {value1 &&
                    value2 &&
                    idx === 0 &&
                    (edit ? (
                      <button onClick={() => setEdit(!edit)}>완료</button>
                    ) : (
                      <TbEdit
                        color="navy"
                        size={"0.8rem"}
                        onClick={() => setEdit(!edit)}
                      />
                    ))}
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
