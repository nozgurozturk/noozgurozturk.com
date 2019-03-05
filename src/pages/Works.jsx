import React, { Component } from "react";
import Back from "../components/Back";
import Button from "../components/Button";
import DotNav from "../components/DotNav";
import PageName from "../components/PageName";
import ProjectName from "../components/ProjectName";
import Abstract from "../components/Abstract";
import Model from "../components/Model";
import styled from "styled-components";
import {TweenMax} from "gsap/all";

const Work = styled.div`
 overflow-y:hidden;
`;

export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWork: 0,
      works: [
        {
          id: 1,
          name: "moorse",
          abstract:
            "moorse is morse code translator of audio and visual decoding. it is built with tone.js and react.",
          model: "moorse"
        },
        {
          id: 2,
          name: "skin",
          abstract:
            "skin is a project that combines the concepts of recycling and technology in order to create an interactive installation.",
          model: "skin"
        },
        {
          id: 3,
          name: "shelves",
          abstract:
            "shelves is a library and storage for a small family in izmir. no glue and screws are used in installation",
          model: "shelves"
        },
        {
          id: 4,
          name: "kinesis",
          abstract:
            "kinesis is using depth data of kinect for scaning objects in real life. also it converts this data for web interfaces.",
          model: "kinect"
        },
        {
          id:5,
          name: "experiments",
          abstract:
          "in experimental projects, i would like to use web technologies for making generative art. through this experiments, my aim is to improve my coding skill with my design background",
          model: "experiments"
        }
      ]
    };
  }

  setActiveWork = () => {
    if (this.state.activeWork < this.state.works.length - 1) {
      this.setState({ activeWork: this.state.activeWork + 1 });
    } else {
      this.setState({ activeWork: 0 });
    }
  };
  setSelect = (index) =>{
    if (index === -1) {
      this.setState({ activeWork: 4 });
    } else if (index === 5) {
      this.setState({ activeWork: 0 });
    } else {
      this.setState({ activeWork: index });
    }
  }
  
  componentDidMount(){
    const page = document.querySelector(Work)
    TweenMax.from(page, 4.8, {opacity:0})
  }
  
  render() {
    return (
      <Work>
        <Back />
        <PageName onActive={this.setActiveWork}/>
        <ProjectName onName={this.state.works[this.state.activeWork].name} onId={this.state.works.id}/>
        <Model onModel={this.state.works[this.state.activeWork].model}></Model>
        <Abstract
          onAbstract={this.state.works[this.state.activeWork].abstract}
        />
        <Button onName={this.state.works[this.state.activeWork].name} />
        <DotNav onSelect={this.setSelect} onDot={this.state.works} onActiveWork={this.state.activeWork}></DotNav>
      </Work>
    );
  }
}
