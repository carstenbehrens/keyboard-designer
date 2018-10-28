import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { tint, shade } from 'polished';
import styled from 'styled-components';

const DarkKey = styled.div`
  width: ${props => `${props.size * 55}px`};
  height: 55px;
  margin-left: 3px;
  margin-top: 3px;
  background-color: ${props => props.color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-width: 8px 8px 8px;
  border-style: solid;
  border-top-color: ${props => tint(0.3, props.color)};
  border-bottom-color: ${props => shade(0.5, props.color)};
  border-left-color: ${props => shade(0.3, props.color)};
  border-right-color: ${props => shade(0.3, props.color)};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:last-child {
    margin-bottom: 3px;
  }

  &:hover {
    font-size: 3px;
  }
`;

const LightKey = styled(DarkKey)`
  border-top-color: ${props => tint(0.35, props.color)};
  border-bottom-color: ${props => shade(0.4, props.color)};
  border-left-color: ${props => tint(0.09, props.color)};
  border-right-color: ${props => tint(0.09, props.color)};
`;

const KeyCap = styled.div`
  height: 42.5px;
  width: 100%;
  border-radius: 4px;
  background-color: ${props => props.color};
  transition: all 0.3s;
`;

const KeyChar = styled.div`
  margin-left: 3px;
  margin-top: 2px;
  font-size: 15px;
  color: ${props => props.fontColor};
  user-select: none;
`;

class Key extends Component {
  // Only render if the colors a key changes
  shouldComponentUpdate(nextProps) {
    const { color, fontColor } = this.props;
    if (color === nextProps.color && fontColor === nextProps.fontColor) {
      return false;
    }
    return true;
  }

  render() {
    const checkColor = new RegExp('#[0-5]');
    // Check if the color is light or dark
    const { color, fontColor, onClick, size, symbol } = this.props;
    if (checkColor.test(color)) {
      return (
        <LightKey color={color} onClick={() => onClick()} size={size || 1}>
          <KeyCap color={color} size={size}>
            <KeyChar fontColor={fontColor}>{symbol}</KeyChar>
          </KeyCap>
        </LightKey>
      );
    }
    return (
      <DarkKey color={color} onClick={() => onClick()} size={size || 1}>
        <KeyCap color={color} size={size}>
          <KeyChar fontColor={fontColor}>{symbol}</KeyChar>
        </KeyCap>
      </DarkKey>
    );
  }
}

Key.propTypes = {
  color: PropTypes.string,
  fontColor: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  symbol: PropTypes.string,
};

export default Key;
