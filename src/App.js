import React, { Component } from 'react';
import styled from 'styled-components';
import { Font } from 'styled-icons/fa-solid/Font';
import { SketchPicker } from 'react-color';
import Keyboard from './Keyboard/Keyboard';
import Key from './Keyboard/Key';
import { firstRow, secondRow, thirdRow, fourthRow, fifthRow } from './Keyboard/Layout';
import Header from './Header/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #e1e1e1 0%, #f2f2f2 50%, #e1e1e1 51%, #f6f6f6 100%);
  height: 100vh;
  width: 100vw;
`;

const StyleBar = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-around;
`;

const CloseingX = styled.div`
  color: black;
  font-size: 3rem;
  user-select: none;
`;

const KeyColor = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  background-color: ${props => props.color}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  transition: all 0.3s;

  &:hover {
    filter: drop-shadow(0 0 9px rgba(0, 0, 0, 0.35));

    transform: scale(1.05) translateY(-0.5rem);
  }
`;

const Popover = styled.div`
  position: 'fixed';
  zindex: '3';
`;

const FontColor = styled(Font)`
  height: 45px;
  width: 45px;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    filter: drop-shadow(0 0 9px rgba(0, 0, 0, 0.35));

    transform: scale(1.05) translateY(-0.5rem);
  }
`;

const ColorIcon = styled.div`
  filter: drop-shadow(0 0 9px rgba(0, 0, 0, 0.1));
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '#ff4545',
      brush: 'keys',
      fontColor: '#4A4A4A',
      keyDefault: '#f9f9f9',
      fontDefault: '1b1b1b',
    };
  }

  handleKeyClick = () => {
    this.setState(prevState => ({
      displayKeyColorPicker: !prevState.displayKeyColorPicker,
      displayFontColorPicker: false,
      brush: 'Key',
    }));
  };

  handleFontClick = () => {
    this.setState(prevState => ({
      displayFontColorPicker: !prevState.displayFontColorPicker,
      displayKeyColorPicker: false,
      brush: 'Font',
    }));
  };

  // Update State with current Color
  handleKeyChange = color => {
    this.setState({ color: color.hex });
  };

  // Update State with current Color
  handleFontChange = color => {
    this.setState({ fontColor: color.hex });
  };

  keyClick = key => {
    const { brush, color, fontColor } = this.state;
    if (brush === 'Font') {
      this.setState({ [`${key}Font`]: fontColor });
    } else {
      this.setState({ [key]: color });
    }
  };

  renderKeys = keys => {
    const { keyDefault, fontDefault } = this.state;
    return keys.map(key => (
      <Key
        key={key[1]}
        size={key[2] || 1}
        symbol={key[0]}
        color={this.state[key[1]] || keyDefault}
        fontColor={this.state[`${key[1]}Font`] || fontDefault}
        onClick={() => this.keyClick([key[1]])}
      />
    ));
  };

  render() {
    const { color, fontColor, displayKeyColorPicker, displayFontColorPicker } = this.state;
    return (
      <Container>
        <Header />
        <StyleBar>
          <ColorIcon>
            <KeyColor color={color} onClick={this.handleKeyClick}>
              {displayKeyColorPicker ? <CloseingX>X</CloseingX> : null}
            </KeyColor>
            {displayKeyColorPicker ? (
              <Popover>
                <SketchPicker color={color} onChange={this.handleKeyChange} />
              </Popover>
            ) : null}
          </ColorIcon>
          <ColorIcon>
            <FontColor color={fontColor} onClick={this.handleFontClick} />
            {displayFontColorPicker ? (
              <Popover>
                <SketchPicker color={fontColor} onChange={this.handleFontChange} />
              </Popover>
            ) : null}
          </ColorIcon>
        </StyleBar>
        <Keyboard>
          {this.renderKeys(firstRow)}
          {this.renderKeys(secondRow)}
          {this.renderKeys(thirdRow)}
          {this.renderKeys(fourthRow)}
          {this.renderKeys(fifthRow)}
        </Keyboard>
      </Container>
    );
  }
}

export default App;
