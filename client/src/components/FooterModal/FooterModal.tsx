import { useNavigate } from "react-router-dom";
import { MenuItem, ModalWrapper } from "./styles";
import { TbApple, TbRun, TbCheckupList } from "react-icons/tb";

const FooterModal = () => {
  const navigate = useNavigate();

  return (
    <ModalWrapper>
      <MenuItem onClick={() => navigate("/foodrecord")}>
        <TbApple size={"23px"} />
        <span>식단 추가</span>
      </MenuItem>
      <MenuItem onClick={() => navigate("/exerciserecord")}>
        <TbRun size={"23px"} />
        <span>운동 추가</span>
      </MenuItem>
      <MenuItem onClick={() => navigate("/main")}>
        <TbCheckupList size={"23px"} />
        <span>계획 추가</span>
      </MenuItem>
    </ModalWrapper>
  );
};

export default FooterModal;
