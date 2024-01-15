// 쿠키에 저장된 유저 쿠키 값을 리턴, 없으면 null 리턴

const getUserCookie = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("USER_COOKIE" + "=")) {
      return cookie.substring("USER_COOKIE".length + 1);
    }
  }
  return null;
};

export default getUserCookie;
