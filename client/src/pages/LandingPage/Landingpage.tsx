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
import { ROUTE } from "../../routes/Route";
import { message } from "antd";
import { getUserCookie } from "../../utils";

export default function LandingPage() {
  const navigate = useNavigate();

  // 로그인 한 상태이면 메인페이지로, 안한 상태이면 로그인페이지로 이동
  const linkInitialPage = () => {
    if (getUserCookie()) {
      navigate(ROUTE.MAIN_PAGE.link);
      message.success("오늘 하루도 화이팅!");
    } else navigate(ROUTE.LOGIN_PAGE.link);
  };

  return (
    <Wrapper onClick={linkInitialPage}>
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
