import { Radio } from "antd";
import { RadioWrapper } from "./styles";

type MainRadioButtonType = {
  defaultValue: string;
  onChange: React.Dispatch<React.SetStateAction<any>>; //setState의 타입
};
export default function MainRadioButton({
  defaultValue,
  onChange,
}: MainRadioButtonType) {
  return (
    <RadioWrapper>
      <Radio.Group defaultValue={defaultValue} buttonStyle="solid">
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
