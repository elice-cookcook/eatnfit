import styled from "styled-components";

const Wrapper = styled.div`
  height: 100dvh;
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
  margin: 10px 0;
`;

const Text = styled.p<{ size?: string }>`
  font-size: ${({ size }) => size};
  text-align: center;
  margin: 0 0 20px 0;
  a {
    color: #00a9ff;
  }
`;

export { Wrapper, Title, Form, Text };
