import React, { Component } from "react";
import styled from "styled-components";

// const Dot = styled.li`
//   position: absolute;
//   width: 23px;
//   height: 23px;
//   border: 3px solid #FAFAFA;;
//   border-radius: 23px;
//   bottom: 10vh;
//   right: ${props => props.left};
//   background-color: ${props => props.bgColor};
//   @media (max-width: 1024px) {
//     bottom: 20vh;
//   }
// `;
const Dot = styled.li`
  position: absolute;
  letter-spacing: 0.4vh;
  font-family: "Borda M";
  height: 5vh;
  font-size: 4vh;
  bottom: 10vh;
  right: ${props => props.right};
  color: ${props => props.color};
  text-align: center;
  cursor: pointer;
  transition: 400ms;
  @media (max-width: 1024px) {
    width: ${props => props.width};
    background-color: ${props => props.bgColor};
    bottom: 0;
    left: ${props => props.mleft};
    right: unset;
    transition: 400ms;
  }
  &:hover {
    color: #f4847a;
    transition: 400ms;
  }
`;

export default class DotNav extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.onDot.map((item, i) => (
            <Dot
              onClick={this.props.onSelect.bind(this, i)}
              color={
                this.props.onActiveWork === i
                  ? "#FFAB5D"
                  : "rgba(255,255,255,0.1)"
              }
              key={i}
              width={100 / 5 + "vw"}
              right={i * -9 + 51 + "vw"}
              mleft={i * (100 / 5) + "vw"}
              bgColor={
                this.props.onActiveWork === i
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(255,255,255,0.1)"
              }
            >
              [0{i + 1}]
            </Dot>
          ))}
        </ul>
      </div>
    );
  }
}
