import { Container, ContentItem } from "./styles";
import { User } from "../../types/User";

const UserProfile = ({ userData }: { userData: User }) => {
  return (
    <>
      {userData && (
        <Container>
          <ContentItem>
            <label>이메일</label>
            <span>{userData.email}</span>
          </ContentItem>
          <ContentItem>
            <label>이름</label>
            <span>{userData.name}</span>
          </ContentItem>
          <ContentItem>
            <label>키</label>
            <span>
              {userData.height}
              <span className="unit">cm</span>
            </span>
          </ContentItem>
          <ContentItem>
            <label>현재/목표 몸무게</label>
            <span>
              {userData.weight}/{userData.target_weight}
              <span className="unit">kg</span>
            </span>
          </ContentItem>
        </Container>
      )}
    </>
  );
};

export default UserProfile;
