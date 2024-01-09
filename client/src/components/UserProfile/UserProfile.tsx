import { useGetUserInfo } from "../../hooks";
import { Container } from "./styles";

const UserProfile = () => {
  const { data: UserData } = useGetUserInfo();
  return (
    UserData && (
      <Container>
        <span>{UserData.email}</span>
      </Container>
    )
  );
};

export default UserProfile;
