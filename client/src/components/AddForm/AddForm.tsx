import { WrappedAddForm, Label, Input } from "./styles";

type AddFormProps = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddForm: React.FC<AddFormProps> = (props) => {
  return (
    <WrappedAddForm>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        type="text"
        id={props.name}
        name={props.name}
        placeholder="입력하기"
        onChange={props.onChange}
      />
    </WrappedAddForm>
  );
};

export default AddForm;
