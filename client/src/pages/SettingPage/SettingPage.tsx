import { UserProfile } from "../../components";
import { Container, LogOutButton, Title, WithDrawButton } from "./styles";

const SettingPage = () => {
  return (
    <Container>
      <Title>설정</Title>
      <UserProfile />
      <LogOutButton>로그아웃</LogOutButton>
      <WithDrawButton>회원탈퇴</WithDrawButton>
    </Container>
  );
};

export default SettingPage;
