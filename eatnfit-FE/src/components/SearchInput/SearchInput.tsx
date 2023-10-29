import { WrappedSearchInput, SearchImage, Input } from "./styles";
import SearchImg from "../../img/search.png";

type SearchInputProps = {
  text: string;
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <WrappedSearchInput>
      <SearchImage src={SearchImg} />
      <Input placeholder={props.text + " 이름을 입력해주세요."} />
    </WrappedSearchInput>
  );
};

export default SearchInput;
