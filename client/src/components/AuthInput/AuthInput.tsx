import { useState } from "react";
import { FeildWrapper, Input, InputWrapper, Message } from "./styles";
import { TbEye } from "react-icons/tb";
import { InputStatus } from "../../utils";

type AuthInputType = {
  icon: any;
  status?: string;
  placeholder: string;
  type?: string;
  value: any;
  onChange: React.Dispatch<React.SetStateAction<any>>; //setState의 타입
  unit?: null | string;
  isPassword?: boolean;
  message?: string | null;
  hasMargin?: boolean;
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
      {hasMargin && <Message>{message}</Message>}
    </FeildWrapper>
  );
};

export default AuthInput;
