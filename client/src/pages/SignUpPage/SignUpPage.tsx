import { useState } from "react";
import {
  TbLock,
  TbLockCheck,
  TbMail,
  TbUser,
  TbMan,
  TbHeartFilled,
  TbHeart,
} from "react-icons/tb";
import { InputStatus } from "../../utils";
import { AuthInput, AuthSubmitButton } from "../../components";
import { Form, Title, Wrapper } from "./styles";
import { usePostSignUp } from "../../hooks/postSignUp";
import { message } from "antd";

export default function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [targetWeight, setTargetWeight] = useState<number>();
  const [emailInputStatus, setEmailInputStatus] = useState(InputStatus.NORMAL);
  const [passwordInputStatus, setPasswordInputStatus] = useState(
    InputStatus.NORMAL
  );
  const [confirmPasswordInputStatus, setConfirmPasswordInputStatus] = useState(
    InputStatus.NORMAL
  );
  const [nameInputStatus, setNameInputStatus] = useState(InputStatus.NORMAL);
  const [heightInputStatus, setHeightInputStatus] = useState(
    InputStatus.NORMAL
  );
  const [weightInputStatus, setWeightInputStatus] = useState(
    InputStatus.NORMAL
  );
  const [targetWeightInputStatus, setTargetWeightInputStatus] = useState(
    InputStatus.NORMAL
  );
  const { mutate: postSignUp } = usePostSignUp(
    email,
    password,
    name,
    weight!,
    height!,
    targetWeight!
  );

  const handleSignUp = () => {
    if (
      emailInputStatus !== InputStatus.SUCCESS ||
      passwordInputStatus !== InputStatus.SUCCESS ||
      confirmPasswordInputStatus !== InputStatus.SUCCESS ||
      nameInputStatus !== InputStatus.SUCCESS ||
      weightInputStatus !== InputStatus.SUCCESS ||
      heightInputStatus !== InputStatus.SUCCESS ||
      targetWeightInputStatus !== InputStatus.SUCCESS
    ) {
      message.error(
        "회원가입을 할 수 없습니다. 입력 정보를 다시 확인해주세요."
      );
    } else postSignUp();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Form action="">
        <AuthInput
          icon={<TbUser size={"20px"} />}
          status={nameInputStatus}
          onChange={(e) => {
            setName(e.target.value);
            setNameInputStatus(
              e.target.value.length >= 2 && e.target.value.length <= 10
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          value={name}
          placeholder="이름"
          message={
            nameInputStatus === InputStatus.ERROR
              ? "이름은 2자이상, 10자 이하여야 합니다."
              : nameInputStatus === InputStatus.SUCCESS
              ? "사용가능한 이름입니다."
              : ""
          }
        />
        <AuthInput
          status={emailInputStatus}
          icon={<TbMail size={"20px"} />}
          type="email"
          value={email}
          placeholder="아이디(이메일)"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailInputStatus(
              e.target.value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]")
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          message={
            emailInputStatus === InputStatus.ERROR
              ? "아이디는 이메일 형식으로 입력해주세요."
              : emailInputStatus === InputStatus.SUCCESS
              ? "사용가능한 아이디입니다."
              : ""
          }
        />
        <AuthInput
          status={passwordInputStatus}
          icon={<TbLock size={"20px"} />}
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordInputStatus(
              e.target.value.length >= 4
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          isPassword
          message={
            passwordInputStatus === InputStatus.ERROR
              ? "비밀번호는 4글자 이상이어야 합니다."
              : passwordInputStatus === InputStatus.SUCCESS
              ? "사용가능한 비밀번호입니다."
              : ""
          }
        />
        <AuthInput
          status={confirmPasswordInputStatus}
          icon={<TbLockCheck size={"20px"} />}
          type="password"
          value={confirmPassword}
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordInputStatus(
              e.target.value === password
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          isPassword
          message={
            confirmPasswordInputStatus === InputStatus.ERROR
              ? "비밀번호가 일치하지 않습니다."
              : confirmPasswordInputStatus === InputStatus.SUCCESS
              ? "비밀번호가 일치합니다."
              : ""
          }
        />
        <AuthInput
          status={heightInputStatus}
          icon={<TbMan size={"20px"} />}
          type="number"
          value={height || ""}
          placeholder="신장(키)"
          onChange={(e) => {
            setHeight(parseFloat(e.target.value));
            setHeightInputStatus(
              parseFloat(e.target.value) >= 100 &&
                parseFloat(e.target.value) <= 300
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          unit={"cm"}
          message={
            heightInputStatus === InputStatus.ERROR
              ? "100과 300사이의 수만 입력가능합니다."
              : ""
          }
        />
        <AuthInput
          status={weightInputStatus}
          icon={<TbHeart size={"20px"} />}
          type="number"
          value={weight || ""}
          placeholder="체중(몸무게)"
          onChange={(e) => {
            setWeight(parseFloat(e.target.value));
            setWeightInputStatus(
              parseFloat(e.target.value) >= 40 &&
                parseFloat(e.target.value) <= 200
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          unit={"kg"}
          message={
            weightInputStatus === InputStatus.ERROR
              ? "40과 200사이의 수만 입력가능합니다."
              : ""
          }
        />
        <AuthInput
          status={targetWeightInputStatus}
          type="number"
          value={targetWeight || ""}
          placeholder="목표 체중(몸무게)"
          onChange={(e) => {
            setTargetWeight(parseFloat(e.target.value));
            setTargetWeightInputStatus(
              parseFloat(e.target.value) >= 40 &&
                parseFloat(e.target.value) <= 200
                ? InputStatus.SUCCESS
                : InputStatus.ERROR
            );
          }}
          icon={<TbHeartFilled size={"20px"} />}
          unit={"kg"}
          onKeyDown={handleKeyDown}
          message={
            targetWeightInputStatus === InputStatus.ERROR
              ? "40과 200사이의 수만 입력가능합니다."
              : ""
          }
        />
      </Form>

      <AuthSubmitButton text={"회원가입"} onClick={handleSignUp} />
    </Wrapper>
  );
}
