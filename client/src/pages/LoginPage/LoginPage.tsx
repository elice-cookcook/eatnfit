import { TbLock, TbMail } from "react-icons/tb";
import { useState } from "react";
import { AuthInput, AuthSubmitButton } from "../../components";
import { Form, Title, Wrapper, Text } from "./styles";
import { usePostLogin } from "../../hooks/postLogin";
import { ROUTE } from "../../routes/Route";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate: postLogin } = usePostLogin(email, password);

  const handleLogin = () => {
    postLogin();
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Text size={"16px"}>Eat&Fit에 오신 것을 환영합니다.</Text>
      <Form>
        <AuthInput
          icon={<TbMail size={"20px"} />}
          type="email"
          value={email}
          placeholder="아이디(이메일)"
          onChange={(e) => setEmail(e.target.value)}
          hasMargin={false}
        />
        <AuthInput
          icon={<TbLock size={"20px"} />}
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          isPassword
          hasMargin={false}
        />
      </Form>
      <AuthSubmitButton text="로그인" onClick={handleLogin} />
      <Text size="15px">
        아직 회원이 아니신가요?
        <a href={ROUTE.SIGNUP_PAGE.link}>회원가입하기</a>
      </Text>
    </Wrapper>
  );
}
