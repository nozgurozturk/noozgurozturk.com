import React, { Component } from "react";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
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
  top: 400vh;
  @media (max-width: 768px) {
    top: 380vh;
  }
`;
const WebsiteLink = styled.div`
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

export default class Moorse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "moorse",
      exp: [
        "moorse is morse code translator feature of auido and visual decoding.it build with tone.js and react.",
        "Bacon ipsum dolor amet porchetta jerky frankfurter kevin rump. Venison pastrami short ribs, drumstick frankfurter tongue pork loin cow bacon andouille burgdoggen turducken t-bone ribeye. Jowl bacon kielbasa capicola, chuck jerky meatloaf chicken. Fatback beef ribs porchetta filet mignon pig, venison kielbasa doner shank bresaola swine landjaeger picanha. Ribeye meatloaf andouille leberkas ball tip tongue rump prosciutto burgdoggen ground round filet mignon.",
        "Bacon ipsum dolor amet meatball shoulder sausage short ribs rump spare ribs ribeye porchetta fatback landjaeger chuck meatloaf pancetta tail. Turkey prosciutto meatball filet mignon salami flank short ribs capicola chuck beef. Capicola turducken filet mignon salami cupim, short loin pastrami alcatra picanha. Tenderloin tri-tip corned beef porchetta tail cupim. Corned beef kevin boudin pancetta, beef capicola tri-tip ribeye meatball.Sirloin fatback hamburger filet mignon ground round. Drumstick strip steak filet mignon, biltong turducken flank beef ribs bacon porchetta burgdoggen tri-tip pig pork chop. Doner kielbasa tri-tip picanha hamburger salami shankle. Boudin brisket jerky, tail burgdoggen strip steak ribeye pork chop bresaola ham."
      ],
      info: {
        field: "audio",
        technologies: "React, Tone.js",
        role: "Design, Development",
        year: "2018"
      },
      link: "https://moorse.site"
    };
  }
  render() {
    return (
      <div>
        <Back />
        <ProjectName onName={this.state.name} />
        <ProjectInfo onInfo={this.state.info} />
        <Jumbotron onName={this.state.name} />
        <ProjectExp onExp={this.state.exp} onName={this.state.name} />
        {/* <ImageGallery onImage={this.state.name} /> */}
        <Wrapper>
        <a href={this.state.link} target="blank">
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
      </div>
    );
  }
}
