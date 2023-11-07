import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

export const Container = styled.div`
    display: flex;
    color: #00a9ff;
    align-items: center;
    font-size: 20px;
    gap: 4px;
    width: 47%;
    cursor: pointer;
`;
export const StyledTitle = styled(Title)`
    margin: 0 !important;
    color: #00a9ff !important;
`;