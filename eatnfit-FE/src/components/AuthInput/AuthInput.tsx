import { useState } from "react";
import { Input, InputWrapper } from "./styles";
import { TbEye } from "react-icons/tb";

type AuthInputType = {
  icon: any;
  status: string;
  placeholder: string;
  type?: string;
  value: any;
  onChange: React.Dispatch<React.SetStateAction<any>>; //setState의 타입
  unit?: null | string;
  isPassword?: boolean;
};

const AuthInput = ({
  icon,
  status,
  placeholder,
  type = "text",
  value,
  onChange,
  unit,
  isPassword,
}: AuthInputType) => {
  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  return (
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
  );
};

export default AuthInput;
