import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const PrjName = styled.h1`
font-size: 8vh;
letter-spacing: 4px;
position: absolute;
bottom: ${props => props.bot};
top: ${props => props.top};
left: 8vw;
color:#FFAB5D;
@media (max-width: 1024px) {
    left:unset;
    right:15vw;
  }
`;
class ProjectName extends Component {
  constructor(props){
    super(props);
    this.state={valueBot:"", valueTop:""}
  }

  setPositions = () => {
    const page = this.props.location.pathname;
    if (page === "/works") {
      this.setState({valueBot:"2vh"});
      this.setState({valueTop:"none"});
    } else {
      this.setState({valueBot:"none"});;
      this.setState({valueTop:"5vh"});
    }
  };
  textAnimation = () => {
  
    let interval;
    let element = document.querySelector(PrjName);
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
  handleAnimationOut = () => {
    clearInterval(this.interval);
    this.element.innerText = this.originalText;
  };

  componentDidMount(){
    this.setPositions();
  }
  componentDidUpdate(){
    this.handleAnimationIn();
    setTimeout(() => {
      this.handleAnimationOut();
    }, 600);
  }
  render() {
    
    return (
      <div>
        
        <PrjName bot={this.state.valueBot} top={this.state.valueTop}>
     {this.props.onName}
        </PrjName>
      </div>
    );
  }
}
export default withRouter(ProjectName);
