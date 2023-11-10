import { CloseOutlined } from "@ant-design/icons";
import { useDeletePlan } from "../../hooks";

type DeletePlanButtonType = {
  id: string;
};
export default function DeletePlanButton({ id }: DeletePlanButtonType) {
  const { mutate } = useDeletePlan(id);
  const handleClose = () => {
    mutate();
  };
  return (
    <CloseOutlined style={{ color: "#89cff3" }} onClick={() => handleClose()} />
  );
}
