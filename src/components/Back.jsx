import React, { Component } from "react";
import styled from "styled-components";
import { SvgLoader } from 'react-svgmt';
import BackSvg from "../assets/icons/leftArrow.svg"
import {withRouter} from 'react-router-dom';

const BackButton = styled(SvgLoader)`
  
  position:absolute;
  top:11vh;
  left:3vw;
  height:10vh;
  display:block;
  stroke-width:8px;
  fill:none;
  stroke:#FAFAFA;
  cursor:pointer;
  transition:400ms;
  &:hover{
    stroke:#F4847A ;
    transition:400ms;
  }
`;

class Back extends Component {
 

  render() {
    return (
      <div>

        <BackButton path={BackSvg} onClick={() => this.props.history.goBack()}>
        </BackButton>
        </div>
    );
  }
}

export default withRouter(Back);