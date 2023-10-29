import { Divider } from "antd";
import { Container, Contents, Label } from "./styles";

interface DashboardType {
  title: string[];
  description: string[];
  width: number;
}
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
            <>
              <Contents>
                <Label>{item}</Label>
                <span>{description[idx]}</span>
              </Contents>
              {idx !== 2 && (
                <Divider style={{ height: "4vh" }} type="vertical" />
              )}
            </>
          );
        })}
      </Container>
    </>
  );
}
