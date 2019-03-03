import React, { Component } from "react";
import styled from "styled-components";
import { SvgLoader } from "react-svgmt";
import prevArrow from "../assets/icons/leftArrow.svg";
import nextArrow from "../assets/icons/rightArrow.svg";
import arrow from "../assets/icons/goArrow.svg";

const Wrapper = styled.div`
  position: absolute;
  height: 20vh;
  width: 100vw;
  border-top: 0.1px solid #fafafa;
  top: 490vh;
  @media (max-width: 768px) {
    top: 470vh;
  }
`;
const WebsiteLink = styled.button`
  position: absolute;
  bottom: 6vh;
  right: 41vw;
  display: block;
  height: 8vh;
  width: 18vw;
  border: 1px solid #fafafa;
  padding: 1.5vh 1.5vh 1.5vh 2vh;
  font-size: 4vh;
  text-align: left;
  color: #fafafa;
  transition: 400ms;
  background-color: unset;
  font-family: "Borda M";
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: 400ms;
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    bottom: 4vh;
    height: 12vh;
    width: 30vw;
    right: 35vw;
  }
`;
const PBox = styled.div`
  position: absolute;
  bottom: 6vh;
  color: #fafafa;
  font-size: 4vh;
  width: 10vw;
  height: 6vh;
  @media (max-width: 1024px) {
    font-size: 3vh;
    width: 20vw;

  }
`;
const Pnext = styled(PBox)`
  right: 3vw;
  text-align: start;
`;
const Pprev = styled(PBox)`
  left: 3vw;
  text-align: end;
`;
const Arrow = styled(SvgLoader)`
  position: absolute;
  height: 6vh;
  bottom:0vh;
  stroke: #fafafa;
  stroke-width: 10px;
  fill: none;
  cursor: pointer;
`;
const Next = styled(Arrow)`
  right: 0;
`;
const Prev = styled(Arrow)`
  left: 0;
`;

const GoArrow = styled(SvgLoader)`
  position: absolute;
  top: 1.5vh;
  right: 1.5vh;
  height: 3vh;
  fill: none;
  stroke: #fafafa;
  stroke-width: 8px;
`;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <a href={this.props.onLink} target="blank">
          <WebsiteLink>
            Go to Website <GoArrow path={arrow} />
          </WebsiteLink>
        </a>
        <Pnext>
          Previous
          <br />
          Project
          <Arrow>
            <Next path={nextArrow} />
          </Arrow>
        </Pnext>
        <Pprev>
          Next
          <br />
          Project
          <Arrow>
            <Prev path={prevArrow} />
          </Arrow>
        </Pprev>
      </Wrapper>
    );
  }
}
