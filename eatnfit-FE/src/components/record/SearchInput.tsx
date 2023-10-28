import styled from "styled-components";
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

const WrappedSearchInput = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  padding: 8px 28px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  color: gray;

  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchImage = styled.img`
  width: 24px;
  position: absolute;
  top: 16%;
  left: 28px;
`;
