import { CloseOutlined } from "@ant-design/icons";
import { useDeletePlan } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

type DeletePlanButtonType = {
  id: string | undefined;
};
export default function DeletePlanButton({ id }: DeletePlanButtonType) {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { mutate } = useDeletePlan(id, activeDay);

  const handleClose = () => {
    mutate();
  };

  return (
    <CloseOutlined style={{ color: "#89cff3" }} onClick={() => handleClose()} />
  );
}
