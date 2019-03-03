import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";


export default class Shelves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 3,
      name: "shelves",
      exp: [
        "shelves is morse code translator feature of auido and visual decoding.it build with tone.js and react.",
        "Bacon ipsum dolor amet tenderloin fatback shank, flank ribeye biltong hamburger sausage burgdoggen salami brisket. Doner capicola leberkas meatball, beef cupim tri-tip meatloaf frankfurter pork chop sausage strip steak. Kielbasa filet mignon prosciutto andouille, salami beef tri-tip biltong fatback picanha doner tail swine. Cupim corned beef turkey, burgdoggen rump jerky pastrami porchetta ground round andouille tri-tip. Swine flank pork landjaeger drumstick fatback leberkas turducken porchetta hamburger short loin andouille bresaola ribeye. Drumstick pig picanha tenderloin, short loin ball tip shoulder rump. Sausage tenderloin tongue biltong, leberkas landjaeger salami frankfurter turducken boudin pancetta alcatra shank turkey.",
        "Bacon ipsum dolor amet venison bacon pastrami corned beef, jerky strip steak pork loin meatloaf pork shank beef capicola. Alcatra ribeye shoulder ham, burgdoggen beef ribs brisket. Porchetta pancetta tail, kevin strip steak landjaeger pastrami pork loin ball tip prosciutto bresaola short loin. Bresaola short ribs beef ribs pork buffalo swine picanha, cow sirloin.Tenderloin andouille ground round pork chop. Pork chop ham hock fatback chicken ribeye bacon pancetta chuck jowl turkey swine porchetta. Filet mignon ham hock picanha beef ribs pork shoulder hamburger salami biltong kielbasa. T-bone tongue andouille chicken shank tail ground round biltong fatback pork chop. Pig cow venison ham ground round."
      ],
      info: {
        field: "Furniture",
        technologies: "Rhinoceros, CNC, Hand Tools",
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
      </div>
    );
  }
}
