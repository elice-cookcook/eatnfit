import styled from "styled-components";

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #00a9ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FeildWrapper = styled.div<{ $message?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ $message }) => ($message ? 0 : "21px")};
`;

const Message = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: tomato;
  height: 15px;
  margin: 3px 0;
`;

export { Wrapper, Title, Form, FeildWrapper, Message };
