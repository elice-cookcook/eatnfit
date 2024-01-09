import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 10px;

  button {
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Title = styled.h2`
  color: #00a9ff;
  text-align: center;
`;

export const LogOutButton = styled.button`
  color: black;
  border: 1px solid black;
`;

export const WithDrawButton = styled.button`
  color: tomato;
  border: 1px solid tomato;
`;
