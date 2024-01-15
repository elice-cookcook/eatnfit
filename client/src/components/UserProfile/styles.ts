import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #00a9ff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
`;

export const ContentItem = styled.div`
  margin: 10px 5px;
  display: flex;
  text-align: center;
  label {
    color: #00a9ff;
    font-weight: bold;
    text-align: center;
    margin: 0 5px;
    flex: 1;
  }
  span {
    color: black;
    flex: 1;
    .unit {
      color: gray;
      margin: 0 3px;
    }
  }
`;
