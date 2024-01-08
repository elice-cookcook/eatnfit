import { useNavigate } from "react-router-dom";
import CloseImage from "../../img/close.png";
import { setFood } from "../../redux";
import { useDispatch } from "react-redux";

const Close = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <img
      src={CloseImage}
      onClick={() => {
        nav(-1);
        dispatch(setFood([]));
      }}
      style={{ width: 20, cursor: "pointer" }}
    />
  );
};

export default Close;
