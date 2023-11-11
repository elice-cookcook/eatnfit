import { useNavigate } from "react-router-dom";
import CloseImage from "../../img/close.png";

const Close = () => {
  const nav = useNavigate();
  return (
    <img
      src={CloseImage}
      onClick={() => nav(-1)}
      style={{ width: 20, cursor: "pointer" }}
    />
  );
};

export default Close;
