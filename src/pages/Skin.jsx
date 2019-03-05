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
        "SKIN is a project that combines the concepts of recycling and technology in order to create an interactive installation.The workshop will be led by me and Ali Arslan. ",
        "We propose  building a panel of arches or domes, utilising diferent diameters of sections from recycled advertising cardboard tubes. In addition to assembly, cutting and pasting these tubes, participants will have the chance to learn programming concepts, Arduino boards that will create, using motion sensors, a game of led lights installed in the cardboard walls. The result will be dictated by the curiosity of passersby and their movements that will create a playful and captivating visual efect.",
        "Skin is a digital layer that is placed on the spots where the kinesis of the city appears, detachedly from its form (wall, dome, arc, etc.). Its sole purpose is to mimic the “being” that passed it by shortly before. While doing this, it is possible that Skin will be inserting random/instantaneous reactions just like humans do. The actions of Skin depending on the technology it can use and the ability of perception of the sensors are improvable. However, at this stage the sensors can react to the “things” that pass by in forms of light and movement.In this context, time is a crucial parameter. Needless to say that whatever data is put in the digital tools, Skin an analog creation of men would be have the capability of reacting accordingly to that data. The whole process will be presented to the city as a high speed variation of the lamination of Bucharest. An arc built upon the road or a wall on the side of the road leading the scenery imitates the movements of the passers by, just like loosely sensing the human under a blanket, via tubes designed by men. It gives its surroundings fleeting memoirs, blends into the city; and when they are over, a new “kinetic” already starts to take its place on the stage/on their behalf."
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
        <Footer onLink={this.state.link} onTop={490} onMTop={470}></Footer>
      </div>
    );
  }
}
