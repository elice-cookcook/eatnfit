import { useState } from "react";
import { FeildWrapper, Input, InputWrapper, Message } from "./styles";
import { TbEye } from "react-icons/tb";
import { InputStatus } from "../../utils";

type AuthInputType = {
  icon: React.ReactElement;
  status?: string;
  placeholder: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: null | string;
  isPassword?: boolean;
  message?: string | null;
  hasMargin?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

const AuthInput = ({
  icon,
  status = InputStatus.NORMAL,
  placeholder,
  type = "text",
  value,
  onChange,
  unit,
  isPassword,
  message,
  onKeyDown,
  hasMargin = true,
}: AuthInputType) => {
  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  return (
    <FeildWrapper>
      <InputWrapper status={status}>
        {icon}
        <Input
          type={isPassword && toggleShowPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></Input>
        <span>{unit}</span>
        {isPassword && (
          <TbEye
            size={"20px"}
            color="gray"
            onClick={() => setToggleShowPassword(!toggleShowPassword)}
          />
        )}
      </InputWrapper>
      {hasMargin && <Message status={status}>{message}</Message>}
    </FeildWrapper>
  );
};

export default AuthInput;
