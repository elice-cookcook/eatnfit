import styled from "styled-components";

export const AddImg = styled.div`
  display: flex;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  cursor: pointer;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
`;
export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 200px;
  height: 200px;
  & > img {
    width: 100%;
    border: 1px solid #ddd;
  }
  & > button {
    width: 100px;
    margin: 4px auto;
    background: #c5e7f8b3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
