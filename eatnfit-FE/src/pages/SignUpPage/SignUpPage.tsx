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
import styled from "styled-components";
const InputStatus = {
  NORMAL: "normal",
  ERROR: "error",
  SUCCESS: "success",
};
export default function SignUpPage() {
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
        <FeildWrapper $message={true}>
          <InputWrapper status={nameInputStatus}>
            <TbUser size={"20px"}></TbUser>
            <Input
              type="text"
              value={name}
              placeholder="이름"
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </InputWrapper>
          <Message>
            {nameInputStatus === InputStatus.ERROR
              ? "이름을 정확히 입력하세요"
              : ""}
          </Message>
        </FeildWrapper>
        <FeildWrapper $message={true}>
          <InputWrapper status={emailInputStatus}>
            <TbMail size={"20px"}></TbMail>
            <Input
              type="email"
              value={email}
              placeholder="아이디(이메일)"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputWrapper>
          <Message>
            {emailInputStatus === InputStatus.ERROR
              ? "아이디는 이메일 형식으로 입력해주세요."
              : ""}
          </Message>
        </FeildWrapper>
        <FeildWrapper $message={true}>
          <InputWrapper status={passwordInputStatus}>
            <TbLock size={"20px"}></TbLock>
            <Input
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputWrapper>
          <Message>
            {passwordInputStatus === InputStatus.ERROR
              ? "비밀번호는 8자 이상이어야 합니다. "
              : ""}
          </Message>
        </FeildWrapper>
        <FeildWrapper $message={true}>
          <InputWrapper status={confirmPasswordInputStatus}>
            <TbLockCheck size={"20px"}></TbLockCheck>
            <Input
              type="password"
              value={confirmPassword}
              placeholder="비밀번호 확인"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </InputWrapper>
          <Message>
            {confirmPasswordInputStatus === InputStatus.ERROR
              ? "비밀번호가 일치하지 않습니다."
              : ""}
          </Message>
        </FeildWrapper>
        <FeildWrapper>
          <InputWrapper status={heightInputStatus}>
            <TbMan size={"20px"}></TbMan>
            <Input
              type="number"
              value={height}
              placeholder="신장(키)"
              onChange={(e) => setHeight(parseInt(e.target.value))}
            ></Input>
            <span>cm</span>
          </InputWrapper>
        </FeildWrapper>
        <FeildWrapper>
          <InputWrapper status={weightInputStatus}>
            <TbHeart size={"20px"}></TbHeart>
            <Input
              type="number"
              value={height}
              placeholder="체중(몸무게)"
              onChange={(e) => setWeight(parseInt(e.target.value))}
            ></Input>
            <span>kg</span>
          </InputWrapper>
        </FeildWrapper>
        <FeildWrapper>
          <InputWrapper status={goalWeightInputStatus}>
            <TbHeartFilled size={"20px"}></TbHeartFilled>
            <Input
              type="number"
              value={goalWeight}
              placeholder="목표 체중(몸무게)"
              onChange={(e) => setGoalWeight(parseInt(e.target.value))}
            ></Input>
            <span>kg</span>
          </InputWrapper>
        </FeildWrapper>
      </Form>
      <SubmitButton>회원가입</SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #00a9ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FeildWrapper = styled.div<{ $message?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: ${({ $message }) => ($message ? 0 : "21px")};
`;

const InputWrapper = styled.div<{ status?: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 50%;
  border: 1px solid gray;
  border-bottom: solid
    ${({ status }) =>
      status === InputStatus.ERROR
        ? "2px tomato"
        : status === InputStatus.SUCCESS
        ? "2px green"
        : "1px gray"};
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  width: 70%;
  font-size: 14px;
  background-color: transparent;
  margin: 0 10px;
  padding: 5px;
`;

const Message = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: tomato;
  height: 15px;
  padding: 0;
  margin: 3px 0;
`;

const SubmitButton = styled.button`
  background-color: #89cff3;
  border: none;
  width: 50%;
  align-self: center;
  margin: 20px;
  font-size: 16px;
  border-radius: 3px;
  padding: 10px;
`;
