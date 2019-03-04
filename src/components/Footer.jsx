import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SvgLoader } from "react-svgmt";
import arrow from "../assets/icons/goArrow.svg";

const Wrapper = styled.div`
  position: absolute;
  height: 24vh;
  width: 100vw;
  border-top: 0.1px solid #fafafa;
  top: ${props => props.top};
  @media (max-width: 768px) {
    top: ${props => props.mtop};
  }
`;

const Logo = styled.h1`
  position: absolute;
  left: 5vw;
  font-family: "Borda BI";
  font-size: 10vh;
  color: #121212;
  text-shadow: -1px -1px 0 #fafafa, 1px -1px 0 #fafafa, -1px 1px 0 #fafafa,
    1px 1px 0 #fafafa;
  transition: 400ms;
  &:hover {
    text-shadow: -1px -1px 0 #f4847a, 1px -1px 0 #f4847a, -1px 1px 0 #f4847a,
      1px 1px 0 #f4847a;
    color: #f4847a;
    transition: 400ms;
  }
`;
const Name = styled.h4`
  font-family: "Borda LI";
  position: absolute;
  font-size: 3vh;
  color: #fafafa;
  left: 5vw;
  top: 14vh;
`;
const GoArrow = styled(SvgLoader)`
  position: absolute;
  top: 0.2vh;
  right: -3vw;
  height: 2vh;
  fill: none;
  stroke: #fafafa;
  stroke-width: 10px;
  transition: 400ms;
`;
const Direction = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: 7vw;
  font-size: 3vh;
  text-align: left;
  color: #fafafa;
  transition: 400ms;
  font-family: "Borda M";
  &:hover {
    color: #f4847a;
    transition: 400ms;
    transform: scale(1.05);
  }
  &:hover ${GoArrow} {
    stroke: #f4847a;
    transition: 400ms;
    height: 3vh;
  }
`;
export default class Footer extends Component {
  render() {
    return (
      <Wrapper top={this.props.onTop + "vh"} mtop={this.props.onMTop + "vh"}>
      <Link to={"/"}>
        <Logo>NOO</Logo>
        </Link>
        <Name>N.Ozgur Ozturk</Name>
        <a href={this.props.onLink} target="blank">
          <Direction top={10 + "vh"}>
            Go to Website <GoArrow path={arrow} />
          </Direction>
        </a>
        <Link to="/works">
          <Direction top={18 + "vh"}>
            Back to Works <GoArrow path={arrow} />
          </Direction>
        </Link>
      </Wrapper>
    );
  }
}
