import { Container, ContentItem, ContentValue, EditButton } from "./styles";
import { User } from "../../types/User";
import { useState } from "react";
import { usePatchUserInfo } from "../../hooks";

interface UserProfileProps {
  userData: User;
}

const UserProfile = ({ userData }: UserProfileProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(userData.name);
  const [height, setHeight] = useState(userData.height);
  const [weight, setWeight] = useState(userData.weight);
  const [targetWeight, setTargetWeight] = useState(userData.target_weight);

  const { mutate: patchUserInfo } = usePatchUserInfo(
    name,
    height,
    weight,
    targetWeight
  );

  const handlePatchUserInfo = () => {
    patchUserInfo();
    setIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <EditButton onClick={handlePatchUserInfo}>수정완료</EditButton>
      ) : (
        <EditButton onClick={() => setIsEdit(true)}>수정하기</EditButton>
      )}
      <Container>
        <ContentItem>
          <label>이메일</label>
          <ContentValue>
            <span>{userData.email}</span>
          </ContentValue>
        </ContentItem>
        <ContentItem>
          <label>이름</label>
          <ContentValue>
            {isEdit ? (
              <input value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              <span>{name}</span>
            )}
          </ContentValue>
        </ContentItem>
        <ContentItem>
          <label>키</label>
          <ContentValue>
            {isEdit ? (
              <input
                type={"number"}
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
            ) : (
              <span>{height}</span>
            )}
            <span className="unit">cm</span>
          </ContentValue>
        </ContentItem>
        <ContentItem>
          <label>현재몸무게</label>
          <ContentValue>
            {isEdit ? (
              <input
                type={"number"}
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            ) : (
              <span>{weight}</span>
            )}
            <span className="unit">kg</span>
          </ContentValue>
        </ContentItem>
        <ContentItem>
          <label>목표 몸무게</label>
          <ContentValue>
            {isEdit ? (
              <input
                type={"number"}
                value={targetWeight}
                onChange={(e) => setTargetWeight(parseFloat(e.target.value))}
              />
            ) : (
              <span>{targetWeight}</span>
            )}
            <span className="unit">kg</span>
          </ContentValue>
        </ContentItem>
      </Container>
    </>
  );
};

export default UserProfile;
