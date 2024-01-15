import { UserProfile } from "../../components";
import { Container, LogOutButton, Title, WithDrawButton } from "./styles";
import { Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { useDeleteUser, useGetUserInfo } from "../../hooks";
import { useCallback, useEffect } from "react";

const SettingPage = () => {
  const navigate = useNavigate();

  const { data: userData } = useGetUserInfo(); // 유저정보 불러오기
  const { mutate: withDraw, isSuccess } = useDeleteUser(userData?._id ?? ""); // 회원탈퇴

  const linkToLandingPage = useCallback(() => {
    navigate(ROUTE.LANDING_PAGE.link);
    window.location.reload();
  }, [navigate]);

  const deleteUserCookie = useCallback(() => {
    document.cookie =
      "USER_COOKIE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }, []);

  const handleLogout = () => {
    deleteUserCookie();
    message.success("로그아웃 되었습니다.");
    linkToLandingPage();
  };

  const handleWithDraw = () => {
    withDraw();
  };

  useEffect(() => {
    if (isSuccess) {
      deleteUserCookie();
      message.success("회원탈퇴 되었습니다.");
      linkToLandingPage();
    }
  }, [deleteUserCookie, isSuccess, linkToLandingPage]);

  return (
    <Container>
      <Title>설정</Title>
      {userData && <UserProfile userData={userData} />}
      <LogOutButton onClick={handleLogout}>
        <span>로그아웃</span>
      </LogOutButton>
      <Popconfirm
        title={"회원탈퇴"}
        description={
          <>
            회원탈퇴 시, 모든 데이터가 삭제됩니다.
            <br />
            정말 회원탈퇴하시겠습니까?
          </>
        }
        placement="bottom"
        okText="네"
        cancelText="아니요"
        onConfirm={handleWithDraw}
      >
        <WithDrawButton>
          <span>회원탈퇴</span>
        </WithDrawButton>
      </Popconfirm>
    </Container>
  );
};

export default SettingPage;
