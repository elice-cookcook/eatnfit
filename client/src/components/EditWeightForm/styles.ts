import styled from "styled-components";

export const InputWrapper = styled.div`
  input {
    width: 25px;
    font-size: 0.6rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } // number type input 옆 화살표(증감) 버튼 삭제
`;
