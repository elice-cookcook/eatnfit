import { ChangeEvent, useState } from "react";
import { InputWrapper } from "./styles";
import { TbEdit } from "react-icons/tb";

interface EditWeightFormProps {
  weight1: number; // 현재몸무게
  weight2: number; //목표몸무게
  onChange1: (e: ChangeEvent<HTMLInputElement>) => void; // 현재 몸무게 변경
  onChange2: (e: ChangeEvent<HTMLInputElement>) => void; // 목표 몸무게 변경
}
const EditWeightForm = ({
  weight1,
  weight2,
  onChange1,
  onChange2,
}: EditWeightFormProps) => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <InputWrapper>
        {edit ? (
          <input value={weight1} onChange={onChange1} type="number"></input>
        ) : (
          <span>{weight1}</span>
        )}
        <span>kg /</span>
        {edit ? (
          <input value={weight2} onChange={onChange2} type="number"></input>
        ) : (
          <span>{weight2}</span>
        )}
        <span>kg</span>
      </InputWrapper>
      {edit ? (
        <button onClick={() => setEdit(!edit)}>완료</button>
      ) : (
        <TbEdit color="navy" size={"0.8rem"} onClick={() => setEdit(!edit)} />
      )}
    </>
  );
};

export default EditWeightForm;
