import { WrappedLongBtn } from "./styles";

type LongBtnProps = {
  text: string;
};

const LongBtn: React.FC<LongBtnProps> = (props) => {
  return <WrappedLongBtn>{props.text}</WrappedLongBtn>;
};

export default LongBtn;
