import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";



const PName = styled.h1`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  font-size: 6vh;
  letter-spacing: 4px;
  position: absolute;
  display: block;
  bottom: 10vh;
  left: 0.1vw;
  color: #FAFAFA;
  @media (max-width: 1024px) {
    bottom:30vh;
  }
`;

class PageName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:null,
      pNames: ["ABOUT", "WORKS", "404"]
    };
  }
  componentDidMount(){
    const page = this.props.location.pathname;
    
    if (page === "/about") {
      this.setState({index:0})
    } else if (page === "/works") {
      this.setState({index:1})
    }else{
      this.setState({index:2})
    }


  };

  render() {
    return (
      <div>
        <PName>{this.state.pNames[this.state.index]}</PName>
      </div>
    );
  }
}
export default withRouter(PageName);
