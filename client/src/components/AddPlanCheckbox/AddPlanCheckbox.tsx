import { Container } from "../PlanCheckboxes/styles";
import { CloseOutlined } from "@ant-design/icons";
import { StyledInput } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";
import { usePostPlan } from "../../hooks";
import { Checkbox } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { format } from "date-fns";

type AddPlanCheckboxType = {
  setAddPlan: Dispatch<SetStateAction<boolean>>;
};

export default function AddPlanCheckbox({ setAddPlan }: AddPlanCheckboxType) {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const [focus, setFocus] = useState(true);
  const [plan, setPlan] = useState("");

  const { mutate } = usePostPlan(format(activeDay, "yyyyMMdd"), {
    content: plan,
    isComplete: 1,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePostPlan();
    }
  };

  const handleChange = (value: string) => {
    setPlan(value);
  };

  const handlePostPlan = () => {
    if (plan !== "") mutate();
    setFocus(false);
    setAddPlan(false);
  };

  return (
    <Container>
      {!focus ? (
        <Checkbox>
          <StyledInput
            onBlur={() => setFocus(false)}
            value={plan}
          ></StyledInput>
          {}
        </Checkbox>
      ) : (
        <StyledInput
          autoFocus
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            handleKeyDown(e);
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value);
          }}
          onBlur={() => {
            handlePostPlan();
          }}
        ></StyledInput>
      )}

      <CloseOutlined style={{ color: "#89cff3" }} />
    </Container>
  );
}
