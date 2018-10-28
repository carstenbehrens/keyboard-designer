import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Case = styled.div`
  margin: 4vh 0;
  height: 30.3rem;
  width: 88rem;
  background-color: rgb(248, 248, 248);
  border-radius: 5px;
  box-shadow: 0 4px  4px  rgba(0, 0, 0, .1),
  0 1px  6px  rgba(0, 0, 0, .05),
  0 8px  8px  rgba(0, 0, 0, .1), 
  0 16px 16px rgba(0, 0, 0, .1), 
  8px 32px 32px rgba(0, 0, 0, .15), 
  8px 64px 64px rgba(0, 0, 0, .15);
  }

  padding: 5px;
`;

const Background = styled.div`
  background-color: #4d4d4d;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
`;

export default function Keyboard({ children }) {
  return (
    <Case>
      <Background>{children}</Background>
    </Case>
  );
}

Keyboard.propTypes = {
  children: PropTypes.element.isRequired,
};
