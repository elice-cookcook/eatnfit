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
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [goalWeight, setGoalWeight] = useState<number>();

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
  const [goalWeightInputStatus, setGoalWeightInputStatus] = useState(
    InputStatus.NORMAL
  );

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Form action="">
        <AuthInput
          icon={<TbUser size={"20px"} />}
          status={nameInputStatus}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="이름"
          message={
            nameInputStatus === InputStatus.ERROR
              ? "이름을 정확히 입력하세요"
              : ""
          }
        />
        <AuthInput
          status={emailInputStatus}
          icon={<TbMail size={"20px"} />}
          type="email"
          value={email}
          placeholder="아이디(이메일)"
          onChange={(e) => setEmail(e.target.value)}
          message={
            emailInputStatus === InputStatus.ERROR
              ? "아이디는 이메일 형식으로 입력해주세요."
              : ""
          }
        />
        <AuthInput
          status={passwordInputStatus}
          icon={<TbLock size={"20px"} />}
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          isPassword
          message={
            passwordInputStatus === InputStatus.ERROR
              ? "비밀번호는 8자 이상이어야 합니다. "
              : ""
          }
        />
        <AuthInput
          status={confirmPasswordInputStatus}
          icon={<TbLockCheck size={"20px"} />}
          type="password"
          value={confirmPassword}
          placeholder="비밀번호 확인"
          onChange={(e) => setConfirmPassword(e.target.value)}
          isPassword
          message={
            confirmPasswordInputStatus === InputStatus.ERROR
              ? "비밀번호가 일치하지 않습니다."
              : ""
          }
        />
        <AuthInput
          status={heightInputStatus}
          icon={<TbMan size={"20px"} />}
          type="number"
          value={height}
          placeholder="신장(키)"
          onChange={(e) => setHeight(parseInt(e.target.value))}
          unit={"cm"}
        />
        <AuthInput
          status={weightInputStatus}
          icon={<TbHeart size={"20px"} />}
          type="number"
          value={weight}
          placeholder="체중(몸무게)"
          onChange={(e) => setWeight(parseInt(e.target.value))}
          unit={"kg"}
        />
        <AuthInput
          status={goalWeightInputStatus}
          type="number"
          value={goalWeight}
          placeholder="목표 체중(몸무게)"
          onChange={(e) => setGoalWeight(parseInt(e.target.value))}
          icon={<TbHeartFilled size={"20px"} />}
          unit={"kg"}
        />
      </Form>

      <AuthSubmitButton text={"회원가입"} onClick={() => navigate("/login")} />
    </Wrapper>
  );
}
