import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Keyboard } from 'styled-icons/fa-solid/Keyboard';
import { GithubAlt } from 'styled-icons/fa-brands/GithubAlt';

const Container = styled.div`
  min-height: 15vh;
  width: 100vw;
  color: #fdfdfd;
  padding: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

const HeaderKeyboard = styled(Keyboard)`
  height: 60px;
  width: 60px;
  color: #000;

  &:hover {
    color: #ff4545;
    transform: translateY(-3px);
  }
`;

const Title = styled.h1`
  margin-left: 12px;
  background-color: #ff4545;
  padding: 9px;
  color: #000;
  font-size: 2rem;

  &::selection {
    background-color: #fff;
    color: #000;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const HeaderGithubAlt = styled(GithubAlt)`
  height: 60px;
  width: 60px;
  color: #ff4545;
  margin-right: 3rem;
  animation: ${rotate} 12s linear infinite;
  align-self: start;

  &:hover {
    color: #000;
  }
`;

export default function Header() {
  return (
    <Container>
      <HeaderLogo>
        <HeaderKeyboard />
        <Title>Simple Keyboard-Designer</Title>
      </HeaderLogo>
      <a href="https://github.com/carstenbehrens">
        <HeaderGithubAlt />
      </a>
    </Container>
  );
}
