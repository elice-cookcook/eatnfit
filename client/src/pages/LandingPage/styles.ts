import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;

const TopWrapper = styled.div`
  position: relative;
  top: -20px;
  margin-left: 375px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 10px;
  z-index: -1;
`;

const Image = styled.img`
  width: 50px;
`;

const MiddleWrapper = styled.div`
  margin: 30vh 0 20vh 0;
`;

const Title = styled.p`
  background-color: #00a9ff;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  margin: 0;
`;

const Text = styled.p`
  color: #00a9ff;
  text-align: center;
  font-weight: bold;
`;

const slideTop = keyframes`
  from {
    margin-top: 25px;
  }

  to {
    margin-top: 50px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    animation: ${slideTop} 1s 0.5s infinite linear alternate;
  }
`;

export {
  Wrapper,
  TopWrapper,
  MiddleWrapper,
  Image,
  ImageWrapper,
  Title,
  Text,
  BottomWrapper,
};
