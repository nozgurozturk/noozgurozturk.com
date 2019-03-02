import React, { Component } from "react";
import styled from "styled-components";


const Content = styled.p`
  position: absolute;
  top: 10vh;
  right: 15vw;
  width: 28vh;
  font-weight: 400;
  font-size: 3vh;
  color: #FAFAFA;
`;

export default class Abstract extends Component {
  textAnimation = () => {
  
    let interval;
    let element = document.querySelector(Content);
    let originalText = element.innerText;

    const randomInt = max => Math.floor(Math.random() * max);
    const randomFromArray = array => array[randomInt(array.length)];

    const scrambleText = text => {
      const chars = "*?><[]&@#)(.%$-_:/;?!0123456789".split("");
      return text
        .split("")
        .map(x => (randomInt(3) > 1 ? randomFromArray(chars) : x))
        .join("");
    };
    this.interval = interval;
    this.element = element;
    this.originalText = originalText;
    this.scrambleText = scrambleText;
  };
  handleAnimationIn = () => {
    this.textAnimation();
    this.interval = setInterval(
      () => (this.element.innerText = this.scrambleText(this.originalText)),
      100
    );
  };
  handleAnimationOut = ()=> {
    clearInterval(this.interval);
    this.element.innerText = this.originalText;
  };

  componentDidUpdate(){
    this.handleAnimationIn();
    setTimeout(() => {
      this.handleAnimationOut();
    }, 600);
  }

  render() {
    return (
      <div>
        <Content>
          {this.props.onAbstract}
        </Content>
      </div>
    );
  }
}
