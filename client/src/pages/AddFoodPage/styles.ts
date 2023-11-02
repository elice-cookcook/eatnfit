import styled from "styled-components";

const AddFoodHeader = styled.div`
  text-align: center;
  & > h2 {
    margin: 0;
  }
`;

const AddFoodMain = styled.form`
  padding: 30px 10px;
  & > h4 {
    color: #3c3c3c;
    margin: 20px 0 4px;
    padding: 0 24px;
  }
  & > span {
    color: #787878;
    font-size: 14px;
    padding: 0 24px;
  }
`;

const AddFoodFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
`;

export { AddFoodHeader, AddFoodMain, AddFoodFooter };
