import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";

export default class Skin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      name: "skin",
      exp: [
        "skin is morse code translator feature of auido and visual decoding.it build with tone.js and react.",
        "Bacon ipsum dolor amet jowl ground round landjaeger, pork belly pork porchetta chuck chicken tenderloin salami cow kevin. Beef ribs tenderloin kevin frankfurter. Bresaola burgdoggen pancetta filet mignon. Salami ribeye jerky kevin tail, filet mignon frankfurter. T-bone sausage chicken pork chop jerky beef ribs, tri-tip ground round ribeye jowl picanha.",
        "Bacon ipsum dolor amet meatball brisket ham hock andouille. T-bone alcatra beef ribs, turkey tri-tip picanha salami. Kevin fatback ham hock sirloin, frankfurter sausage bacon t-bone chuck tenderloin. Pork chop jowl ribeye, prosciutto shankle t-bone chuck kevin venison spare ribs pork belly swine. Sausage brisket ball tip, pancetta tri-tip leberkas fatback ribeye cupim tongue pig pork chop alcatra ham. Boudin pastrami meatloaf beef leberkas corned beef sausage tri-tip, ribeye filet mignon pancetta.T-bone ball tip chuck, spare ribs biltong kevin brisket sirloin. Tri-tip jowl boudin beef ribs, rump bacon ham. Kevin shoulder jerky short loin bacon sirloin shankle spare ribs meatloaf frankfurter capicola pork brisket porchetta bresaola. Turkey kevin hamburger short loin tri-tip picanha shoulder pancetta. Tongue ribeye fatback, leberkas meatloaf burgdoggen ham hock ham chicken beef ribs sausage doner bacon."
      ],
      info: {
        field: "Installation",
        technologies: "Rhinoceros, Ardunio, Hand Tools",
        role: "Design, Coding, Construct",
        year: "2016"
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
      </div>
    );
  }
}
