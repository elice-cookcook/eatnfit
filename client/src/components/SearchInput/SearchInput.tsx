import { WrappedSearchInput, SearchImage, Input } from "./styles";
import SearchImg from "../../img/search.png";

type SearchInputProps = {
  text: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function SearchInput(props: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    props.onChange(newValue);
  };

  return (
    <WrappedSearchInput>
      <SearchImage src={SearchImg} />
      <Input
        placeholder={props.text + " 이름을 입력해주세요."}
        value={props.value}
        onChange={handleChange}
        onKeyDown={props.onKeyDown}
      />
    </WrappedSearchInput>
  );
}

export default SearchInput;
