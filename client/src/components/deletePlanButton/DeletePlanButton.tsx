import { CloseOutlined } from "@ant-design/icons";
import { useDeletePlan } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { format } from "date-fns";

type DeletePlanButtonType = {
  id: string | undefined;
};
export default function DeletePlanButton({ id }: DeletePlanButtonType) {
  const activeDay = useSelector(
    (state: RootState) => state.activeDay.activeDay
  );

  const { mutate } = useDeletePlan(id, format(activeDay, "yyyyMMdd"));

  const handleClose = () => {
    mutate();
  };

  return (
    <CloseOutlined style={{ color: "#89cff3" }} onClick={() => handleClose()} />
  );
}
