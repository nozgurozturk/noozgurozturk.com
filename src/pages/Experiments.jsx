import React, { Component } from "react";
import Back from "../components/Back";
import {SvgLoader} from "react-svgmt";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
import wip from "../assets/icons/wip.svg";
import styled from "styled-components";
const WipWrapper = styled.div`
position:absolute;
width:100%;
top:120vh;
`;
const Wip = styled.h1`
position:absolute;
width:100%;
top:40vh;
font-style:"Borda B";
color :#FAFAFA;
text-align:center;
`;
const Noise = styled(SvgLoader)`
position:absolute;
left:30vw;
width:40vw;
fill:#FAFAFA;
&:hover{
  fill:#ffab5d;
}
`

export default class Experiments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 5,
      name: "experiments",
      exp: [
        "experiment is morse code translator feature of auido and visual decoding.it build with tone.js and react.",
        "experiement is morse code translator feature of auido and visual decoding.it build with tone.js and react."
      ],
      info: {
        field: "Experimental",
        technologies: "Three.js, Tone.js, Processing",
        role: "Design, Development",
        year: "2019"
      }
    };
  }
  render() {
    return (
      <div>
        <Back />
        <ProjectName onName={this.state.name} />
        <ProjectInfo onInfo={this.state.info} />
        <Jumbotron onName={this.state.name} />
        {/* <ProjectExp onExp={this.state.exp} onName={this.state.name} />
        <ImageGallery onImage={this.state.name} /> */}
        <WipWrapper>
        <Noise path={wip}></Noise>
        <Wip>THIS CONTENT IS NOT AVAILABLE DURING IN BETA</Wip>
        </WipWrapper>
      </div>
    );
  }
}