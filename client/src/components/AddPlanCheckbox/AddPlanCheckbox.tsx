import { Container, StyledCheckbox } from "../PlanCheckboxes/styles";
import { CloseOutlined } from "@ant-design/icons";
import { StyledInput } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";
import { usePostPlan } from "../../hooks";

type AddPlanCheckboxType = {
  setAddPlan: Dispatch<SetStateAction<boolean>>;
};
export default function AddPlanCheckbox({ setAddPlan }: AddPlanCheckboxType) {
  const [focus, setFocus] = useState(true);
  const [plan, setPlan] = useState("");
  const { mutate } = usePostPlan("20231031", {
    content: plan,
    isComplete: 1,
  });
  const handlePostPlan = () => {
    if (plan !== "") mutate();
    setAddPlan(false);
  };
  return (
    <Container>
      {!focus ? (
        <StyledCheckbox>
          <StyledInput
            onBlur={() => setFocus(false)}
            value={plan}
          ></StyledInput>
          {}
        </StyledCheckbox>
      ) : (
        <StyledInput
          autoFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlan(e.target.value);
          }}
          onBlur={() => {
            setFocus(false);
            handlePostPlan();
          }}
        ></StyledInput>
      )}

      <CloseOutlined style={{ color: "#89cff3" }} />
    </Container>
  );
}
