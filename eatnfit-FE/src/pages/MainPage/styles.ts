import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;
export const Container = styled.div`
    text-align: center;
    padding: 20px;
`;
export const FlexBox = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const StyledTitle = styled(Title)`
    text-align: left;
    color: #00a9ff !important;
`
export const FoodContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;