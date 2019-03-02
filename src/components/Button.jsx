import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SvgLoader } from "react-svgmt";
import arrow from "../assets/icons/goArrow.svg";

const Arrow = styled(SvgLoader)`
  position: absolute;
  top: 1.5vh;
  right: 1.5vh;
  height: 3vh;
  fill: none;
  stroke: #fafafa;
  stroke-width: 8px;
`;

const Pill = styled.div`
  position: absolute;
  bottom: 30vh;
  right: 15vw;
  display: block;
  width: 23vh;
  border: 1px solid #fafafa;
  padding: 1.5vh 1.5vh 1.5vh 2vh;
  /* border-radius: 5vh; */
  font-size: 3vh;
  text-align: left;
  color: #fafafa;
  transition: 400ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: 400ms;
    transform: scale(1.05);
  }
  &:hover ${Arrow}{
    stroke:#FFAB5D;
  }
`;


export default class Button extends Component {
  render() {
    return (
      <div>
        <Link to={`works/${this.props.onName}`}>
          <Pill>
            More Info <Arrow path={arrow}/>
          </Pill>
        </Link>
      </div>
    );
  }
}
