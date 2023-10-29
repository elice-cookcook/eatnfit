import styled from "styled-components";
import { TbLock, TbMail, TbEye } from "react-icons/tb";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Text size={"16px"}>Eat&Fit에 오신 것을 환영합니다.</Text>
      <Form>
        <InputWrapper>
          <TbMail size={"20px"}></TbMail>
          <Input
            type="email"
            value={email}
            placeholder="아이디(이메일)"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <TbLock size={"20px"}></TbLock>
          <Input
            type={toggleShowPassword ? "text" : "password"}
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <TbEye
            color="gray"
            onClick={() => setToggleShowPassword(!toggleShowPassword)}
          ></TbEye>
        </InputWrapper>
      </Form>
      <SubmitButton>로그인</SubmitButton>
      <Text size="15px">
        아직 회원이 아니신가요?<a href="/signUp">회원가입하기</a>
      </Text>
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
  align-items: center;
  margin: 0 0 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 50%;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 5px 0;
`;

const Input = styled.input`
  border: none;
  width: 70%;
  font-size: 14px;
  background-color: transparent;
  margin: 0 10px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  background-color: #89cff3;
  border: none;
  width: 50%;
  align-self: center;
  margin: 10px 0 0 0;
  font-size: 16px;
  border-radius: 3px;
  padding: 10px;
`;

const Text = styled.p<{ size?: string }>`
  font-size: ${({ size }) => size};
  text-align: center;
  margin: 5px 0;
  a {
    color: #89cff3;
  }
`;
