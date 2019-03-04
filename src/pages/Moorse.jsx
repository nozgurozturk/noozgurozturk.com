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
        "moorse is morse code translator feature of audio and visual decoding.it build with tone.js and react.",
        "Bacon ipsum dolor amet porchetta jerky frankfurter kevin rump. Venison pastrami short ribs, drumstick frankfurter tongue pork loin cow bacon andouille burgdoggen turducken t-bone ribeye. Jowl bacon kielbasa capicola, chuck jerky meatloaf chicken. Fatback beef ribs porchetta filet mignon pig, venison kielbasa doner shank bresaola swine landjaeger picanha. Ribeye meatloaf andouille leberkas ball tip tongue rump prosciutto burgdoggen ground round filet mignon.",
        "Bacon ipsum dolor amet meatball shoulder sausage short ribs rump spare ribs ribeye porchetta fatback landjaeger chuck meatloaf pancetta tail. Turkey prosciutto meatball filet mignon salami flank short ribs capicola chuck beef. Capicola turducken filet mignon salami cupim, short loin pastrami alcatra picanha. Tenderloin tri-tip corned beef porchetta tail cupim. Corned beef kevin boudin pancetta, beef capicola tri-tip ribeye meatball.Sirloin fatback hamburger filet mignon ground round. Drumstick strip steak filet mignon, biltong turducken flank beef ribs bacon porchetta burgdoggen tri-tip pig pork chop. Doner kielbasa tri-tip picanha hamburger salami shankle. Boudin brisket jerky, tail burgdoggen strip steak ribeye pork chop bresaola ham."
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
        <Footer onLink={this.state.link} onTop={400} onMTop={380}></Footer>
      </div>
    );
  }
}
