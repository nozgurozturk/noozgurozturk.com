import React, { Component } from "react";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

export default class Moorse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "moorse",
      exp: [
        "Moorse is morse code translator feature of audio and visual decoding. It build with tone.js and react. Moorse provides a unique experience to user with their senteces, words or random letter combinations.",
        "Dots in lines that has been usen in moorse logo refers to signs in morse alphabet. Minimalist aspect of the logo complements the design of website. Simple interface allows the user a better experience. Througn responsive design, site is available different platform such as mobile and desktop.",
        "On moorse project, for every chracter in latin alphabet website creates a diffrenet virtual representation based on morse code. In meant time using tone.js library these characters converted to different audio forms. Tone.js uses its oscillator structre to create audio form in three different waveforms which are called sine, sawtooth and square. User is also provided a feature that they can change the bpm between 30 and 240 to adjust the rhythm. In order to explore bpm and waveform feature, user has been provided the information needed."
      ],
      info: {
        field: "audio",
        techs: "React, Tone.js",
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
        <Footer onLink={this.state.link} onTop={360} onMTop={330}></Footer>
      </div>
    );
  }
}
