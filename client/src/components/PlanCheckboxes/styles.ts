import styled from "styled-components";
interface StyledCheckboxProps {
    isChecked: boolean;
  }
export const Content = styled.div<StyledCheckboxProps>`
    font-size: 20px !important;
    text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
    }};
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #89cff3;
    border-radius: 4px;
    padding: 10px;
    text-align: left;
    margin: 20px 0;
`;