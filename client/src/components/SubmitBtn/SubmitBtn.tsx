import { WrappedSubmitBtn } from "./styltes";

interface SubmitBtnProps {
  onSubmit: () => void;
  text?: string;
  color?: string;
}
const SubmitBtn = ({
  onSubmit,
  text = "등록",
  color = "#89cff3",
}: SubmitBtnProps) => {
  return (
    <WrappedSubmitBtn onClick={onSubmit} style={{ backgroundColor: color }}>
      {text}
    </WrappedSubmitBtn>
  );
};

export default SubmitBtn;
