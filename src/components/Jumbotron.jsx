import React, { Component } from "react";
import styled from "styled-components";
import {TimelineMax, Power2} from "gsap/all";
import { SvgLoader, SvgProxy } from "react-svgmt";
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

const Jb = styled(SvgLoader)`
position:absolute;
top:-4vh;
z-index:-99;
opacity:0.8;
transform:scale(1.0);
`;

export default class Jumbotron extends Component {
  svgAnime=()=>{
      const tl = new TimelineMax({repeat:-1, repeatDelay:0.5})
      const jb = document.querySelector(Jb)
      const curve = jb.querySelectorAll("svg>path");
      tl.staggerFrom(curve, 0.2, {ease: Power2.easeOut, opacity:0.15, repeat:1, yoyo:true},0.1);
    
  }
    render() {
    return (
      <div>
          <Jb path={require(`../assets/images/${this.props.onName}/jb.svg`)} onSVGReady={this.svgAnime}>
          <SvgProxy selector="path" stroke="#FAFAFA"></SvgProxy>
          </Jb>
        </div>
    );
  }
}