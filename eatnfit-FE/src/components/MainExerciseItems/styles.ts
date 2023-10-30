import { Divider } from "antd";
import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
`;
export const TypeLabel = styled.div`
    background-color: #89cff3;
    border-radius: 8px;
    font-size: 12px;
    padding: 4px;
`;
export const TimeText = styled.span`
    color: #8c8c8c;
    font-size: 12px;
`;
export const StyledDivider = styled(Divider)`
    margin: 24px 0 24px -8px;
    border: 1px solid #ebebeb;
`;
export const StyledList = styled.ul`
    padding-left: 16px !important;
    margin: 0;
`;