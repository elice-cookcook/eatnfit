import { WrappedSubmitBtn } from "./styltes";

interface SubmitBtnProps {
  onSubmit: () => void;
}
const SubmitBtn = ({ onSubmit }: SubmitBtnProps) => {
  return <WrappedSubmitBtn onClick={onSubmit}>등록</WrappedSubmitBtn>;
};

export default SubmitBtn;
