import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #00a9ff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const EditButton = styled.button`
  border: none;
  padding: 5px;
  background-color: transparent;
  text-decoration: underline;
  margin-left: auto;
  color: #00a9ff;
  font-size: 16px;
`;

export const ContentItem = styled.div`
  height: 20px;
  margin: 10px 5px;
  display: flex;
  text-align: center;

  label {
    width: 50%;
    color: #00a9ff;
    font-weight: bold;
    text-align: center;
    margin: 0 5px;
  }
`;

export const ContentValue = styled.span`
  width: 50%;

  .unit {
    color: gray;
    margin: 0 3px;
  }

  input {
    width: 50%;
    border: none;
    border-bottom: 1px solid gray;
    text-align: center;
    padding: 5px;
    &:focus {
      outline: none;
    }
  }
`;
