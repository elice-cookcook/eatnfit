import { useEffect, useState } from "react";
import { InputWrapper } from "./styles";
import { TbEdit } from "react-icons/tb";
import { useGetUserInfo, usePatchWeight } from "../../hooks";

const EditWeightForm = () => {
  const [edit, setEdit] = useState(false);
  const { data: userData, isLoading } = useGetUserInfo();
  const [weight, setWeight] = useState<number>(0);
  const [targetWeight, setTargetWeight] = useState<number>(0);

  useEffect(() => {
    if (userData) {
      setWeight(userData?.weight);
      setTargetWeight(userData?.target_weight);
    }
  }, [userData]);

  const { mutate: patchWeight } = usePatchWeight(weight, targetWeight);

  const handlePatchWeight = () => {
    setEdit(!edit);
    patchWeight();
  };

  return isLoading ? (
    <>로딩</>
  ) : (
    <>
      <InputWrapper>
        {edit ? (
          <input
            value={weight || 0}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            type="number"
          ></input>
        ) : (
          <span>{userData?.weight}</span>
        )}
        <span>kg /</span>
        {edit ? (
          <input
            value={targetWeight || 0}
            onChange={(e) => setTargetWeight(parseInt(e.target.value))}
            type="number"
          ></input>
        ) : (
          <span>{userData?.target_weight}</span>
        )}
        <span>kg</span>
      </InputWrapper>
      {edit ? (
        <button onClick={handlePatchWeight}>완료</button>
      ) : (
        <TbEdit color="navy" size={"0.8rem"} onClick={() => setEdit(!edit)} />
      )}
    </>
  );
};

export default EditWeightForm;
