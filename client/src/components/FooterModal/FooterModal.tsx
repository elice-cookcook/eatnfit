import { useNavigate } from "react-router-dom";
import { MenuItem, ModalWrapper } from "./styles";
import { TbApple, TbRun, TbCheckupList } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setSelectedMenu } from "../../redux";
import { ROUTE } from "../../routes/Route";

interface FooterModalProp {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
      <MenuItem
        onClick={() =>
          navigateSelectedMenu(ROUTE.FOOD_RECORD_PAGE.link, "food")
        }
      >
        <TbApple size={"23px"} />
        <span>식단 추가</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigateSelectedMenu(ROUTE.EXERCISE_RECORD_PAGE.link, "exercise");
        }}
      >
        <TbRun size={"22px"} />
        <span>운동 추가</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigateSelectedMenu(ROUTE.MAIN_PAGE.link, "plan");
        }}
      >
        <TbCheckupList size={"22px"} />
        <span>계획 추가</span>
      </MenuItem>
    </ModalWrapper>
  );
};

export default FooterModal;
