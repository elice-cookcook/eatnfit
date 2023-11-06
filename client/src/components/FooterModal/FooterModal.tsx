import { useNavigate } from "react-router-dom";
import { MenuItem, ModalWrapper } from "./styles";
import { TbApple, TbRun, TbCheckupList } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setSelectedMenu } from "../../redux";

interface FooterModalProp {
  setOpen: React.Dispatch<React.SetStateAction<any>>;
}
const FooterModal = ({ setOpen }: FooterModalProp) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateSelectedMenu = (path: string, menu: string) => {
    navigate(path);
    dispatch(setSelectedMenu(menu));
    setOpen(false);
  };
  return (
    <ModalWrapper>
      <MenuItem onClick={() => navigateSelectedMenu("/foodrecord", "food")}>
        <TbApple size={"23px"} />
        <span>식단 추가</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigateSelectedMenu("/exerciserecord", "exercise");
        }}
      >
        <TbRun size={"23px"} />
        <span>운동 추가</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigateSelectedMenu("/main", "plan");
        }}
      >
        <TbCheckupList size={"23px"} />
        <span>계획 추가</span>
      </MenuItem>
    </ModalWrapper>
  );
};

export default FooterModal;
