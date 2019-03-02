import React, { Component } from "react";
import THREE from "../plugins/threejs";
import {TweenMax, Power2} from "gsap/all"
import styled from "styled-components";
import moorsePt from "../assets/models/moorsePt";
import experimentPt from "../assets/models/experimentPt";
import shelvesPt from "../assets/models/shelvesPt";
import skinPt from "../assets/models/skinPt";
import kinectPt from "../assets/models/kinectPt";

const Scene = styled.canvas`
  position: absolute;
  width:100%;
  height:100%;
  /* left: -150px;
  top: -50px; */
  overflow: "hidden";
  z-index: -99;
`;

export default class Model extends Component {
  componentWillMount() {
    window.addEventListener("resize", this.onWindowResize, false);
  }
  componentDidMount() {
    this.setupScene();
    TweenMax.from(this.pointCld.position, 3.6, { ease: Power2.easeOut, z:-1.2 });
  }
  // THREE JS //
  setupScene = () => {
    //RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector(Scene),
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
    camera.position.z = -0.8;
    // camera.position.y = 0.2;
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
    let pcd = this.props.onModel;
    let pointData = null;
    if (pcd === "moorse") {
      pointData = moorsePt;
    } else if (pcd === "skin") {
      pointData = skinPt;
    } else if (pcd === "shelves") {
      pointData = shelvesPt;
    } else if (pcd === "experiments") {
      pointData = experimentPt;
    } else {
      pointData = kinectPt;
    }
    let points = new THREE.Geometry();
    let colors = [];
    for (let i = 0; i < pointData.length; i++) {
      let pt = new THREE.Vector3();
      pt.x = pointData[i].x;
      pt.y = pointData[i].y;
      pt.z = pointData[i].z;
      colors[i] = new THREE.Color();
      points.vertices.push(pt);
    }
    points.colors = colors;
    let pointsMtl = new THREE.PointsMaterial({
      vertexColors: THREE.VertexColors,
      transparent: true,
      opacity: 0.5,
      size: 0.004
    });

    let pointCld = new THREE.Points(points, pointsMtl);
    pointCld.rotation.x = 3;
    pointCld.rotation.y = 3;
    pointCld.position.x=0.1;
    pointCld.position.y=0.05;
    this.points = points;
    this.colors = colors;
    this.pointCld = pointCld;
    this.pointMtl = pointsMtl;
    this.scene.add(pointCld);
  };
  animateColors = () => {
    let pcd = this.props.onModel;
    let pointData = null;
    if (pcd === "moorse") {
      pointData = moorsePt;
    } else if (pcd === "skin") {
      pointData = skinPt;
    } else if (pcd === "shelves") {
      pointData = shelvesPt;
    } else if (pcd === "experiments") {
      pointData = experimentPt;
    } else {
      pointData = kinectPt;
    }
    for (let i = 0; i < pointData.length; i++) {
      this.colors[i].setHSL(
        i * 0.00004 * (this.mouse.x + this.mouse.y) + 0.1,
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
  componentDidUpdate() {
    this.setupScene();
    TweenMax.from(this.pointCld.position, 3.6, { ease: Power2.easeOut, z:-1.2 });
    TweenMax.from(this.pointMtl, 4.8, { ease: Power2.easeOut, opacity:0.1 });  
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
    window.removeEventListener("mousemove", this.onDocumentMouseMove, false);
    this.stop();
    this.renderer.forceContextLoss();
    this.renderer.context = null;
    this.renderer = null;
  }
  render() {
    return (
      <div>
        <Scene />
      </div>
    );
  }
}
