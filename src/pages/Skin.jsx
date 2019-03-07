import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

export default class Skin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      name: "skin",
      exp: [
        "SKIN is a project that combines the concepts of recycling and technology in order to create an interactive installation.The workshop led by me and Ali Arslan. ",
        "We propose  building a panel of arches or domes, utilising diferent diameters of sections from recycled advertising cardboard tubes. In addition to assembly, cutting and pasting these tubes, participants will have the chance to learn programming concepts, Arduino boards that will create, using motion sensors, a game of led lights installed in the cardboard walls. The result will be dictated by the curiosity of passersby and their movements that will create a playful and captivating visual efect.",
        "Skin is a digital layer that is placed on the spots where the kinesis of the city appears, detachedly from its form (wall, dome, arc, etc.). Its sole purpose is to mimic the “being” that passed it by shortly before. While doing this, it is possible that Skin will be inserting random/instantaneous reactions just like humans do. The actions of Skin depending on the technology it can use and the ability of perception of the sensors are improvable. However, at this stage the sensors can react to the “things” that pass by in forms of light and movement.In this context, time is a crucial parameter."
      ],
      info: {
        field: "Installation",
        techs: "Rhinoceros, Ardunio, Hand Tools",
        role: "Design, Coding, Construct",
        year: "2016"
      },
      link: "http://www.meds-workshop.ro/winning-projects/skin/"
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
        <ImageGallery onImage={this.state.name} />
        <Footer onLink={this.state.link} onTop={470} onMTop={440}></Footer>
      </div>
    );
  }
}
