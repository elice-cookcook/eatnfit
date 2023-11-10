import { WrappedLongBtn } from "./styles";

type LongBtnProps = {
  text: string;
  onClick?: () => void;
};

const LongBtn: React.FC<LongBtnProps> = (props) => {
  return <WrappedLongBtn onClick={props.onClick}>{props.text}</WrappedLongBtn>;
};

export default LongBtn;
