import React, { Component } from "react";
import styled from "styled-components";

const Abstract = styled.p`
  position: absolute;
  width: 45vw;
  top: 80vh;
  right: 10vw;
  font-size: 3vh;
  color: #fafafa;
  @media (max-width: 768px) {
    top:26vh;
    right: unset;
    left:10vw;
    width:40vw;
  }
`;
const ParOne = styled.p`
  position: absolute;
  letter-spacing: 0.5vh;
  width: 25vw;
  top: 140vh;
  left: 10vw;
  font-size: 2.6vh;
  color: #fafafa;
  @media (max-width: 768px) {
    top:100vh;
    left:10vw;
    width:80vw;
  }
`;
const ImageOne = styled.img`
  position: absolute;
  top: 140vh;
  right: 10vw;
  width: 45vw;
  @media (max-width: 768px) {
    top:170vh;
    right: unset;
    left:10vw;
    width:80vw;
  }
`;
const ImageTwo = styled.img`
  top: 250vh;
  left: 10vw;
  width: 80vw;
  position: absolute;
  @media (max-width: 768px) {
    top:230vh;
    left:10vw;
    width:80vw;
  }
`;
const ParTwo = styled.p`
  position: absolute;
  letter-spacing: 0.5vh;
  width: 80vw;
  top: 340vh;
  left: 10vw;
  font-size: 2.6vh;
  color: #fafafa;
  @media (max-width: 768px) {
    top:270vh;
    right: unset;
    width:80vw;
  }
`;

export default class ProjectExp extends Component {

  render() {
    return (
      <div>
        <Abstract>{this.props.onExp[0]}</Abstract>
        <ParOne>{this.props.onExp[1]}</ParOne>
        <ImageOne
          src={require(`../assets/images/${this.props.onName}/image01.png`)}
          alt=""
        />
        <ParTwo>{this.props.onExp[2]}</ParTwo>
        <ImageTwo
          src={require(`../assets/images/${this.props.onName}/image02.png`)}
          alt=""
        />
      </div>
    );
  }
}
