import { Radio } from "antd";
import { RadioWrapper } from "./styles";

type MainRadioButtonType = {
  value: string;
  onChange: (menu: string) => void;
};

export default function MainRadioButton({
  value,
  onChange,
}: MainRadioButtonType) {
  return (
    <RadioWrapper>
      <Radio.Group defaultValue={value} value={value} buttonStyle="solid">
        <Radio.Button
          value="food"
          onClick={() => {
            onChange("food");
          }}
        >
          식단
        </Radio.Button>
        <Radio.Button
          value="exercise"
          onClick={() => {
            onChange("exercise");
          }}
        >
          운동
        </Radio.Button>
        <Radio.Button
          value="plan"
          onClick={() => {
            onChange("plan");
          }}
        >
          계획
        </Radio.Button>
      </Radio.Group>
    </RadioWrapper>
  );
}
