import { Radio } from "antd";

export default function MainRadioButton() {
  return (
    <Radio.Group defaultValue="food" buttonStyle="solid">
      <Radio.Button value="food">식단</Radio.Button>
      <Radio.Button value="exercise">운동</Radio.Button>
      <Radio.Button value="plan">계획</Radio.Button>
    </Radio.Group>
  );
}
