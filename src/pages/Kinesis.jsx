import React, { Component } from "react";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
export default class Scenect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      name: "kinesis",
      exp: [
        "Kinesis is using depth data of kinect for scaning objects in real life. Also it can convert depth data for web interfaces.",
        "Kinect has three sensors that work together create your physical image on the screen: an RGB camera and two depth sensor. The depth sensors contains a monochrome CMOS sensor and infrared projector that help create the 3D imagery. It also measures the distance of each point of the object by transmitting invisible near-infrared light and measuring its time of flight after it reflects off the objects.",
        "In kinesis project, collected depth data from Kinect are rendered by Processing. I collected dimension data of points and rendered 3D image under favour of  Daniel Shiffman’s code. In the mean time points’ data of 3D snapshot are converted to JSON file. After the translation, I used javascript library that is called three.js for processing data and then rendering in web interface."
      ],
      info: {
        field: "visual",
        techs: ["Kinect SDK", "Three.js"],
        role: ["development"],
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
        <ProjectExp onExp={this.state.exp} onName={this.state.name} />
        <Footer onLink={this.state.link} onTop={360} onMTop={340}></Footer>
      </div>
    );
  }
}
