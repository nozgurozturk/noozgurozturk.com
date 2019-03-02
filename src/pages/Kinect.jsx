import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";
import Back from "../components/Back";
import ProjectExp from "../components/ProjectExp";
import ProjectInfo from "../components/ProjectInfo";
import ProjectName from "../components/ProjectName";
import Jumbotron from "../components/Jumbotron";

export default class Kinect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      name: "kinect",
      exp: [
        "kinect is morse code translator feature of auido and visual decoding.it build with tone.js and react.",
        "Spicy jalapeno bacon ipsum dolor amet spare ribs porchetta turkey boudin shankle ham short loin hamburger tenderloin pork chop meatball bresaola swine sirloin. Spare ribs sausage landjaeger biltong, alcatra kevin ham hock cow. Pork chop fatback filet mignon pork loin rump sausage beef buffalo ball tip beef ribs hamburger picanha jerky shank. Leberkas kielbasa pork, filet mignon boudin tenderloin doner corned beef shoulder short loin chicken. Biltong jowl cow chicken pastrami frankfurter ribeye meatball filet mignon kielbasa. Tongue ham hock cupim biltong shankle.",
        "Spicy jalapeno bacon ipsum dolor amet andouille doner chicken strip steak ham sausage corned beef. Swine jowl meatloaf tail, tri-tip beef leberkas meatball shoulder sausage pork belly burgdoggen. Bresaola tenderloin leberkas chicken pig cow pork belly shoulder doner burgdoggen salami biltong. Hamburger turkey shank, turducken chicken buffalo pork loin strip steak capicola chuck biltong sirloin beef ribs porchetta. Ribeye landjaeger short loin tail filet mignon spare ribs rump sausage shankle t-bone ham pastrami andouille. Alcatra kielbasa jerky tri-tip short ribs hamburger shank. Pastrami short ribs venison, buffalo meatball t-bone boudin.Spare ribs short loin swine beef burgdoggen chuck tongue fatback doner drumstick. Beef shank tail sirloin capicola. Turkey tail short loin pork belly short ribs, shankle meatloaf meatball buffalo ball tip cupim biltong chicken jerky pancetta. Alcatra beef ribs shoulder burgdoggen short loin ham flank sirloin ribeye shank ball tip pork loin turkey meatloaf. Pastrami capicola ground round, tail tenderloin strip steak swine t-bone short ribs tri-tip bresaola filet mignon."
      ],
      info: {
        technologies: ["Kinect SDK", "Three.js"],
        year: "2019",
        field: "visual",
        role: ["development"]
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
