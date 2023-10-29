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
  align-items: center;
  div {
    margin: 5px 0;
  }
`;

const Text = styled.p<{ size?: string }>`
  font-size: ${({ size }) => size};
  text-align: center;
  margin: 0 0 10px 0;
  a {
    color: #89cff3;
  }
`;

export { Wrapper, Title, Form, Text };
