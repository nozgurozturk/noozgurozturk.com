import React, { Component } from "react";
import styled from "styled-components";
import { SvgLoader } from "react-svgmt";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const Wrapper = styled.div`
  position: absolute;
  top: 380vh;
  width: 100vw;
  @media (max-width: 768px) {
    top:350vh;
    right: unset;
  }
`;
const Display = styled.img`
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  z-index: -99;
`;

const Arrow = styled(SvgLoader)`
  position: absolute;
  top: 40vh;
  height: 6vh;
  stroke: #fafafa;
  stroke-width: 10px;
  fill: none;
  cursor: pointer;

`;
const Left = styled(Arrow)`
  left: 2vw;
  transition: 400ms;
  &:hover {
    stroke: #f4847a;
    transition: 400ms;
  }
`;
const Right = styled(Arrow)`
  right: 6vw;
  transition: 400ms;
  &:hover {
    stroke: #f4847a;
    transition: 400ms;
  }
`;

const Nav = styled.li`
  position: absolute;
  letter-spacing: 0.4vh;
  font-family: "Borda M";
  font-size: 3vh;
  bottom: 4vh;
  cursor: pointer;
  right: ${props => props.right};
  color: ${props => props.color};
  transition: 400ms;
  &:hover {
    color: #f4847a;
    transition: 400ms;
  }
  @media (max-width: 1024px) {
    width: ${props => props.width};
    text-align: center;
    background-color: ${props => props.bgColor};
    bottom: 1vh;
    left: ${props => props.mleft};
    right: unset;
    transition: 400ms;
  }
`;

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activePhoto: 0, numbers: [0, 1, 2, 3, 4, 5] };
  }
  nextPhoto = () => {
    if (this.state.activePhoto < 5) {
      this.setState({ activePhoto: this.state.activePhoto + 1 });
    } else {
      this.setState({ activePhoto: 0 });
    }
  };
  prevPhoto = () => {
    if (this.state.activePhoto > 0) {
      this.setState({ activePhoto: this.state.activePhoto - 1 });
    } else {
      this.setState({ activePhoto: 5 });
    }
  };
  setSelect = index => {
    // TweenMax.to(document.querySelector(Display), 0.8, {opacity:0.0, repeat:1, yoyo:true});
    // setInterval(() => {
    if (index === -1) {
      this.setState({ activePhoto: 6 });
    } else if (index === 7) {
      this.setState({ activePhoto: 0 });
    } else {
      this.setState({ activePhoto: index });
    }
    // }, 800);
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Display
            src={require(`../assets/images/${this.props.onImage}/${
              this.state.activePhoto
            }.jpg`)}
          />
          <Left path={leftArrow} onClick={this.prevPhoto} />
          <Right path={rightArrow} onClick={this.nextPhoto} />
          <ul>
            {this.state.numbers.map((item, i) => (
              <Nav
                className="dotnav"
                onClick={this.setSelect.bind(this, i)}
                color={
                  this.state.activePhoto === i
                    ? "#FFAB5D;"
                    : "rgba(255,255,255,1.0)"
                }
                width={100 / 6 + "vw"}
                mleft={i * (100 / 6) + "vw"}
                bgColor={
                  this.state.activePhoto === i
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.1)"
                }
                key={i}
                right={(6 - i) * 6 - 1 + "vw"}
              >
                [{i + 1}]
              </Nav>
            ))}
          </ul>
        </Wrapper>
      </div>
    );
  }
}
