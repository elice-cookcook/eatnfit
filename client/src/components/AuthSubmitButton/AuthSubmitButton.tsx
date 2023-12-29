import { SubmitButton } from "./styles";

type AuthSubmitButtonProps = {
  text: string;
  onClick: () => void;
};

const AuthSubmitButton = ({ text, onClick }: AuthSubmitButtonProps) => {
  return <SubmitButton onClick={onClick}>{text}</SubmitButton>;
};

export default AuthSubmitButton;
