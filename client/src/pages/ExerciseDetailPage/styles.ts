import styled from "styled-components";

const Wrap = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderTitle = styled.h2`
  text-align: center;
  margin: 10px 0 20px 0;
  color: #00a9ff;
`;

const RecordHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  padding: 0 15px;
  margin-bottom: auto;
`;

const FormItemContainer = styled.div`
  margin: 20px 0;
  span {
    margin: 0 10px;
  }
`;

const Title = styled.h4`
  padding: 5px;
`;

const PTag = styled.p`
  padding: 5px;
  margin: 0;
  color: gray;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

const Span = styled.span`
  height: 30px;
  border: none;
  border-radius: 10px;
  margin-right: 4px;
  padding: 5px;
  color: white;
  background-color: #00a9ff;
`;

const ButtonContainer = styled.div`
  display: flex;
  button {
    margin-left: 5px;
  }
`;
export {
  Wrap,
  HeaderTitle,
  RecordHeader,
  Main,
  FormItemContainer,
  Title,
  Input,
  PTag,
  Span,
  ButtonContainer,
};
