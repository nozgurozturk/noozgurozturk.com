import React, { Component } from "react";
import styled from "styled-components";

const Abstract = styled.p`
  position: absolute;
  width: 45vw;
  top: 80vh;
  left:40vw;
  font-size: 3vh;
  color: #fafafa;
  @media (max-width: 768px) {
    top:26vh;
    right: unset;
    left:10vw;
    width:40vw;
  }
`;
const Paragraph = styled.p`
  position: absolute;
  letter-spacing: 0.2vh;
  line-height:4vh;
  width: ${props=>props.width};
  top: ${props=>props.top};
  left: 10vw;
  font-size: 2.6vh;
  color: #fafafa;
  @media (max-width: 768px) {
    top:${props=>props.mtop};
    width:${props=>props.mwidth};
  }
`;
const Image = styled.img`
  position: absolute;
  width: ${props=>props.width};
  top: ${props=>props.top};
  right: 10vw;
  @media (max-width: 768px) {
    top:${props=>props.mtop};
    width:${props=>props.mwidth};
    right: unset;
    left:10vw;
  }
`;


export default class ProjectExp extends Component {

  render() {
    return (
      <div>
        <Abstract>{this.props.onExp[0]}</Abstract>
        <Paragraph top={130+ "vh"} width={25 + "vw"} mtop={100 + "vh"} mwidth={80 + "vw"}>{this.props.onExp[1]}</Paragraph>
        <Image top={130 + "vh"} width={45 + "vw"} mtop={170 + "vh"} mwidth={80 + "vw"}
          src={require(`../assets/images/${this.props.onName}/image01.png`)}
          alt=""
        />
        <Paragraph top={310 + "vh"} width={80 + "vw"} mtop={220 + "vh"} mwidth={80 + "vw"}>{this.props.onExp[2]}</Paragraph>
        <Image top={230 + "vh"} width={80 + "vw"} mtop={300 + "vh"} mwidth={80 + "vw"}
          src={require(`../assets/images/${this.props.onName}/image02.png`)}
          alt=""
        />
      </div>
    );
  }
}
