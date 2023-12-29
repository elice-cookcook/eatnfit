import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 10px;
  flex: 1;
`;
export const TitleBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const StyledTitle = styled(Title)`
  color: #00a9ff !important;
  margin: 0 !important;
`;
export const Time = styled.span`
  margin-right: auto;
`;
export const StyledList = styled.ul`
  margin: 0;
  padding: 4px 20px;
`;
export const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  span {
    color: #8c8c8c;
  }
`;
export const Image = styled.img`
  width: 100px;
  max-height: 100px;
`;
export const Space = styled.div`
  margin-top: 8px;
`;
