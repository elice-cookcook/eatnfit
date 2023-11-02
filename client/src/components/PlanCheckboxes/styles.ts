import { Checkbox } from "antd";
import styled from "styled-components";

export const StyledCheckbox = styled(Checkbox)`
    span {
        font-size: 20px !important;
    }
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