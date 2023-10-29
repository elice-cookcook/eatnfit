import styled from "styled-components";

const AddExerciseHeader = styled.div`
  text-align: center;
  & > h2 {
    margin: 0;
  }
`;

const AddExerciseMain = styled.div`
  padding: 30px 10px;
  & > span {
    color: #787878;
    font-size: 14px;
    padding: 0 24px;
  }
`;

const AddExerciseFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
`;

export { AddExerciseHeader, AddExerciseMain, AddExerciseFooter };
