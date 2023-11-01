import { Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { RadioWrapper } from "./styles";

type MainRadioButtonType = {
  defaultValue: string;
};
export default function MainRadioButton({ defaultValue }: MainRadioButtonType) {
  const navigate = useNavigate();
  return (
    <RadioWrapper>
      <Radio.Group defaultValue={defaultValue} buttonStyle="solid">
        <Radio.Button
          value="food"
          onClick={() => {
            navigate("/main");
          }}
        >
          식단
        </Radio.Button>
        <Radio.Button
          value="exercise"
          onClick={() => {
            navigate("/main/exercise");
          }}
        >
          운동
        </Radio.Button>
        <Radio.Button
          value="plan"
          onClick={() => {
            navigate("/main/plan");
          }}
        >
          계획
        </Radio.Button>
      </Radio.Group>
    </RadioWrapper>
  );
}
