import { TbBookmarkFilled, TbHandClick } from "react-icons/tb";
import {
  BottomWrapper,
  ImageWrapper,
  Title,
  Image,
  TopWrapper,
  Wrapper,
  Text,
  MiddleWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate("/login")}>
      <TopWrapper>
        <TbBookmarkFilled size={"70px"} color="#00A9FF" />
      </TopWrapper>
      <MiddleWrapper>
        <ImageWrapper>
          <Image src="https://as2.ftcdn.net/jpg/05/36/31/65/160_F_536316579_Uecw32knEFNxuSZn7yLg79a1wFUOuxTH.png" />
          <Image src="https://as2.ftcdn.net/jpg/05/58/84/87/160_F_558848708_QZZOxVRJ378LaRc8xDj9BupI2LulEu3x.png" />
        </ImageWrapper>
        <Title>EAT & FIT</Title>
        <Text>다이어터들을 위한 식단 & 운동 다이어리</Text>
      </MiddleWrapper>
      <BottomWrapper>
        <TbHandClick size={"40px"} color="#00A9FF" />
        <Text>화면을 터치하세요</Text>
      </BottomWrapper>
    </Wrapper>
  );
}
