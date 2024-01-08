import styled from "styled-components";

export const Calory = styled.div`
  h5 {
    width: 90px;
    margin: 0;
  }
  input {
    width: 100px;
    border-width: 0 0 1px;
    text-align: center;
    &:focus {
      outline: none;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  .first,
  .second {
    display: flex;
    margin-bottom: 10px;
  }
`;

export const Left = styled.div`
  width: 50%;
  float: left;
`;

export const Right = styled.div`
  width: 50%;
  float: right;
`;
