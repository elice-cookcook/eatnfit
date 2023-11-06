import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #89cff3;
  padding: 20px;
  border-radius: 4px;
  font-size: 12px;
  margin: 10px auto;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 120px;
  text-align: center;
`;
export const Label = styled.div`
  color: ${(props) => (props.color ? props.color : "#00a9ff")};
  font-weight: bold;
  margin: 3px 0;
  font-size: 0.8rem;
`;
export const Span = styled.span`
  margin: 3px 0;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  button,
  svg {
    border: none;
    border-radius: 0.3rem;
    font-size: 0.6rem;
    margin: 0.1rem;
    cursor: pointer;
  }
`;
