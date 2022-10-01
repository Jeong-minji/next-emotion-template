import type { NextPage } from "next";
import styled from "@emotion/styled";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Text>Hello!</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background_color};
  padding: ${({ theme }) => theme.figure * 3}px;
  height: 100vh;
`;

const Text = styled.h1`
  color: ${({ theme }) => theme.color.gray_900};
`;

export default Home;
