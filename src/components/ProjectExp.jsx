import React, { Component } from "react";
import styled from "styled-components";

const Abstract = styled.p`
  position: absolute;
  width: 45vw;
  top: 80vh;
  right: 10vw;
  font-size: 3vh;
  color: #fafafa;
`;
const ParOne = styled.p`
  position: absolute;
  letter-spacing: 0.5vh;
  width: 25vw;
  top: 140vh;
  left: 10vw;
  font-size: 2.6vh;
  color: #fafafa;
`;
const ParTwo = styled.p`
  position: absolute;
  letter-spacing: 0.5vh;
  width: 80vw;
  top: 380vh;
  left: 10vw;
  font-size: 2.6vh;
  color: #fafafa;
`;
const ImageOne = styled.img`
  position: absolute;
  top: 140vh;
  right: 10vw;
  width: 45vw;
  object-fit: cover;
  z-index: -99;
`;
const ImageTwo = styled.img`
  top: 260vh;
  left: 10vw;
  width: 80vw;
  position: absolute;
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
