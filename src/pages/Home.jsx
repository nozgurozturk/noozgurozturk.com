import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import THREE from "../plugins/threejs";
import { SvgLoader } from "react-svgmt";
import { TweenMax, Power2 } from "gsap/all";
import metaPoints from "../assets/models/kinectPt";
import resume from "../assets/icons/document.svg";
import arrow from "../assets/icons/goArrow.svg";

const Bold = styled.span`
  font-family: "Borda DB";
`;
const Echo = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
`;

const Boxes = styled.div`
  position: absolute;
  top: 20vh;
  right: 15vw;
  width: 40vh;
  height: 60vh;
  color: #fafafa;
`;
const BoxInfo = styled.div`
  position: absolute;
  width: 40vh;
  height: 36vh;
  border: 0.2px solid white;
  transition: 400ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: 400ms;
    transform: scale(1.05);
  }
`;
const About = styled.div`
  position: absolute;
  width: 20vh;
  top: 1.2vh;
  left: 1.2vh;
  font-size: 2.4vh;
`;
const Location = styled.div`
  position: absolute;
  top: 20vh;
  left: 1.2vh;
  font-size: 2.8vh;
`;
const Time = styled.div`
  position: absolute;
  top: 28vh;
  left: 1.2vh;
  font-size: 2.8vh;
`;
const ProjectArrow = styled(SvgLoader)`
  position: absolute;
  top: 3vh;
  right: 3vh;
  height: 3vh;
  fill: none;
  stroke: #fafafa;
  stroke-width: 8px;
  transition: 400ms;
`;
const BoxProject = styled.div`
  position: absolute;
  width: 40vh;
  height: 12vh;
  top: 38.4vh;
  border: 0.2px solid white;
  transition: 400ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: 400ms;
    transform: scale(1.05);
  }
  &:hover ${ProjectArrow} {
    transition: 400ms;
    height: 5vh;
    stroke: #ffab5d;
    stroke-width: 10px;
  }
`;
const ProjectNum = styled.div`
  position: absolute;
  top: 2vh;
  left: 1.2vh;
  font-size: 8vh;
  font-family: "Borda M";
`;
const ProjectStat = styled.div`
  position: absolute;
  top: 3vh;
  left: 10vh;
  font-size: 3vh;
  font-family: "Borda L";
`;
const ProjectWork = styled.div`
  position: absolute;
  top: 5.6vh;
  left: 10vh;
  font-size: 4vh;
  font-family: "Borda M";
`;
const BoxName = styled.div`
  position: absolute;
  width: 40vh;
  height: 7.2vh;
  top: 52.8vh;
  border: 0.1px solid white;
  transition: 400ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: 400ms;
    transform: scale(1.05);
  }
`;
const IconResume = styled(SvgLoader)`
  position: absolute;
  top: 1.6vh;
  left: 1.2vh;
  height: 4vh;
  fill: none;
  stroke: #fafafa;
  stroke-width: 4px;
`;
const Person = styled.div`
  position: absolute;
  top: 1.2vh;
  left: 10vh;
  font-size: 4vh;
`;

const BTL = styled.div`
  position: absolute;
  background: #fafafa;
  width: 0.6vh;
  height: 0.6vh;
  top: -0.3vh;
  left: -0.3vh;
`;
const BTR = styled.div`
  position: absolute;
  background: #fafafa;
  width: 0.6vh;
  height: 0.6vh;
  top: -0.3vh;
  right: -0.3vh;
`;
const BBL = styled.div`
  position: absolute;
  background: #fafafa;
  width: 0.6vh;
  height: 0.6vh;
  bottom: -0.3vh;
  left: -0.3vh;
`;
const BBR = styled.div`
  position: absolute;
  background: #fafafa;
  width: 0.6vh;
  height: 0.6vh;
  bottom: -0.3vh;
  right: -0.3vh;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "N.Ozgur Ozturk",
      text:
        "I am Ozgur a designer who has some coding skill . I want to specialized in 3D web Interface and creative coding.",
      year: null
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.onWindowResize, false);
  }
  // THREE JS //
  setupScene = () => {
    //RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector(Echo),
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //SCENE
    let scene = new THREE.Scene();
    //CAMERA
    let camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.z = -0.4;
    camera.lookAt(0, 0, 0);
    //
    const controls = new THREE.OrbitControls(camera);
    controls.enabled = false;
    //
    const mouse = new THREE.Vector2();
    //
    scene.add(camera);
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
    this.mouse = mouse;
    this.controls = controls;
    //
    window.addEventListener("mousemove", this.onDocumentMouseMove, false);
    //
    this.pointCloud();
    //
    this.start();
    //
  };
  onDocumentMouseMove = event => {
    event.preventDefault();
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
  pointCloud = () => {
    let pointData = metaPoints;
    let points = new THREE.Geometry();
    let colors = [];
    for (let i = 0; i < pointData.length; i++) {
      let pt = new THREE.Vector3();
      pt.x = pointData[i].x;
      pt.y = pointData[i].y;
      pt.z = pointData[i].z - 0.8;
      colors[i] = new THREE.Color();
      if (metaPoints[i].z > 0.6) {
        points.vertices.push(pt);
      }
    }
    points.colors = colors;
    let pointsMtl = new THREE.PointsMaterial({
      vertexColors: THREE.VertexColors,
      transparent: true,
      opacity: 0.4,
      size: 0.005
    });

    let pointCld = new THREE.Points(points, pointsMtl);
    pointCld.rotation.x = 3.2;
    pointCld.rotation.y = 3;
    this.points = points;
    this.colors = colors;
    this.pointCld = pointCld;
    this.pointMtl = pointsMtl;
    this.scene.add(pointCld);
  };
  animateColors = () => {
    let pointData = metaPoints;
    for (let i = 0; i < pointData.length; i++) {
      this.colors[i].setHSL(
        -i * 0.00001 * (this.mouse.x + this.mouse.y) + 0.01,
        1,
        0.5
      );
    }
  };
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  animate = () => {
    this.frameId = requestAnimationFrame(this.animate);
    this.renderScene();

    this.camera.position.x +=
      (-this.mouse.x / 2 - this.camera.position.x) * 0.02;
    this.camera.position.y +=
      (-this.mouse.y / 2 - this.camera.position.y) * 0.01;
    this.animateColors();
    this.points.colorsNeedUpdate = true;
    this.points.verticesNeedUpdate = true;
    this.controls.update();
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  // THREE JS //
  // SCRAMBLE TEXT //
  textAnimation = e => {
    let selectedClass = `${e.target.className}`;
    let interval;
    let element = document.querySelector(`.${selectedClass}`);
    let originalText = element.innerText;

    const randomInt = max => Math.floor(Math.random() * max);
    const randomFromArray = array => array[randomInt(array.length)];

    const scrambleText = text => {
      const chars = "*?><[]&@#)(.%$-_:/;?!0123456789".split("");
      return text
        .split("")
        .map(x => (randomInt(3) > 1 ? randomFromArray(chars) : x))
        .join("");
    };
    this.interval = interval;
    this.element = element;
    this.originalText = originalText;
    this.scrambleText = scrambleText;
  };
  handleMouseOver = e => {
    this.textAnimation(e);
    this.interval = setInterval(
      () => (this.element.innerText = this.scrambleText(this.originalText)),
      100
    );
  };
  handleMouseOut = e => {
    clearInterval(this.interval);
    this.element.innerText = this.originalText;
  };

  // SCRAMBLE TEXT //
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
    window.removeEventListener("mousemove", this.onDocumentMouseMove, false);
    this.stop();
    this.renderer.forceContextLoss();
    this.renderer.context = null;
    this.renderer = null;
  }
  componentDidMount() {
    this.setState({
      time: `${new Date().getFullYear() - 1994}y ${new Date().getMonth() +
        2}m ${new Date().getDate()}d`
    });
    this.setupScene();
    TweenMax.from(this.pointMtl, 4.8, { ease: Power2.easeOut, size: 0.04 });
    const echo = document.querySelector(Echo);
    const boxes = document.querySelector(Boxes);
    TweenMax.from(echo, 4.8, { opacity: 0 });
    TweenMax.from(boxes, 4.8, { opacity: 0 });
  }

  render() {
    return (
      <div>
        <Boxes>
          <BoxInfo>
            <BBL />
            <BBR />
            <BTL />
            <BTR />
            <About>
              <span
                className="about"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.state.text}
              </span>
            </About>
            <Location>
              <Bold>
                Current Location
                <br />
              </Bold>
              <span
                className="location"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                Istanbul
              </span>
            </Location>
            <Time>
              <Bold>
                Time Played
                <br />
              </Bold>
              <span
                className="time"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.state.time}
              </span>
            </Time>
          </BoxInfo>
          <Link to="/works">
            <BoxProject>
              <BBL />
              <BBR />
              <BTL />
              <BTR />
              <ProjectNum>
                <span
                  className="projnum"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  05
                </span>
              </ProjectNum>
              <ProjectStat>
                <span
                  className="projstat"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Online
                </span>
              </ProjectStat>
              <ProjectWork>
                <span
                  className="projwork"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Projects
                </span>
              </ProjectWork>
              <ProjectArrow path={arrow} />
            </BoxProject>
          </Link>

          <BoxName>
            <BBL />
            <BBR />
            <BTL />
            <BTR />
            <IconResume path={resume} />
            <Person>
              <span
                className="person"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.state.name}
              </span>
            </Person>
          </BoxName>
        </Boxes>
        <Echo />
      </div>
    );
  }
}
