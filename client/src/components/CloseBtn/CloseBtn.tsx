import { useLocation, useNavigate } from "react-router-dom";
import CloseImage from "../../img/close.png";
import { RootState, setFood } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE } from "../../routes/Route";

interface CloseBtnProps {
  type?: string;
}
const Close = ({type}: CloseBtnProps) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );
  const handleNavigate = () => {
    switch(type) {
      case 'exerciseSearch' : {
        nav(ROUTE.EXERCISE_RECORD_PAGE.link);
        break;
      }
      case 'foodSearch': {
        if (location.state.isEdit) {
          nav(`${ROUTE.FOOD_DETAIL_PAGE.link}/${activeDay}/${location.state.idx}`, {
            state: { isEdit: location.state.isEdit },
          });
        } else {
          nav(ROUTE.FOOD_RECORD_PAGE.link);
        }
        break;
      }
      default: {
        nav(ROUTE.MAIN_PAGE.link);
        dispatch(setFood([]));
      }
    }
  }
  return (
    <img
      src={CloseImage}
      onClick={() => {
        handleNavigate();
      }}
      style={{ width: 20, cursor: "pointer" }}
    />
  );
};

export default Close;
