import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

export default class Shelves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 3,
      name: "shelves",
      exp: [
        "shelves is library and storage for smally family in izmir. it is assembled by no glue of screw.",
        "In design process, Firstly I made a surface that refer to form of shelves. The form is shaped by long narrow corridor that is connect two rooms in the house. Curve of the form is defined by usage such as deeper volumes are for big stuffs and more narrow volumes are for books and family albums etc. It also provide the user comfortable walking area in linear circulation. Then, I divide the form five equal pieces for production and installation. This five pieces are made by six vertical and nine horizontal wooden plywood.",
        "Shelves has been put together by seventy five custom pieces. All pieces is different each other. CNC machine cut pieces that is exposed in eight copy 8 mm 120x210 cm wooden plywoods. Cutting process took four hours then all pieces is transferred by small pickup to the house. In installation, we didn’t use any glue or screw. We assemble all pieces by use of their holes. That installation method is called waffle structure. As I say, Shelves made by five equal masses. Masses is assembled in garage than part by part moved where it belongs. Ironically, cutting process is took longer time then installation because of the method."
      ],
      info: {
        field: "Furniture",
        techs: "Rhinoceros, CNC, Hand Tools",
        role: "Design, Construct",
        year: "2018"
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
        <ImageGallery onImage={this.state.name} />
        <Footer onLink={this.state.link} onTop={470} onMTop={440}></Footer>
      </div>
    );
  }
}
