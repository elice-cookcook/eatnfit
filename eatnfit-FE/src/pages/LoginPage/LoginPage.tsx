import styled from "styled-components";
import { TbLock, TbMail } from "react-icons/tb";

export default function LoginPage() {
  return (
    <Wrapper>
      <Title>로그인</Title>
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
