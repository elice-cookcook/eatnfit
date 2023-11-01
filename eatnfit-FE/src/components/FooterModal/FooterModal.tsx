import { MenuItem, ModalWrapper } from "./styles";
import { TbApple, TbRun, TbCheckupList } from "react-icons/tb";

const FooterModal = () => {
  return (
    <ModalWrapper>
      <MenuItem>
        <TbApple size={"23px"} />
        <span>식단 추가</span>
      </MenuItem>
      <MenuItem>
        <TbRun size={"23px"} />
        <span>운동 추가</span>
      </MenuItem>
      <MenuItem>
        <TbCheckupList size={"23px"} />
        <span>계획 추가</span>
      </MenuItem>
    </ModalWrapper>
  );
};

export default FooterModal;
