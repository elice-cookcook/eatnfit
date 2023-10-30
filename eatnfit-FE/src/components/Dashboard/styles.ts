import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border: 2px solid #89cff3;
    padding: 20px;
    border-radius: 4px;
    font-size: 12px;
    margin: 10px 0;
`;
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 120px;
`;
export const Label = styled.div`
    color: #00a9ff;
    font-weight: bold;
`;