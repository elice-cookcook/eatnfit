import { Footer, MainExerciseItems } from "..";
import { Container, ItemContainer } from "../MainFood/styles";
import { Space } from "./styles";
import { useGetAllExercise } from "../../hooks";
import { Exercise } from "../../types";

type MainExerciseProps = {
  date: string;
};

export default function MainExercise(props: MainExerciseProps) {
  const { data, isLoading }: { data: Exercise[]; isLoading: boolean } =
    useGetAllExercise(props.date);

  if (isLoading) return;

  const exerciseList = data.map((item) => {
    const exerciseTypeMap: Record<number, string> = {
      0: "유산소",
      1: "무산소",
      2: "스트레칭",
    };
    const type = exerciseTypeMap[item.exercise_type];

    const hours = Math.floor(item.time / 60);
    const minutes = item.time % 60;
    const time = `${hours > 0 ? `${hours}시간` : ""} ${
      minutes > 0 ? `${minutes}분` : ""
    }`;

    return {
      name: item.name,
      type,
      time,
      kcal: item.kcal,
    };
  });

  return (
    <Container>
      <ItemContainer>
        <Space>
          <MainExerciseItems items={exerciseList} />
        </Space>
        <Footer />
      </ItemContainer>
    </Container>
  );
}
