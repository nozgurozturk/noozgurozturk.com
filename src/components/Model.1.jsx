import React, { Component } from "react";
import THREE from "../plugins/threejs";
import styled from "styled-components";

const Scene = styled.canvas`
  position: absolute;
  left:-150px;
  top:-50px;
  overflow: "hidden";
  z-index: -99;
`;

export default class Model extends Component {
  componentWillMount() {
    window.addEventListener("resize", this.onWindowResize, false);
  }
  componentDidMount() {
    this.setupScene();
    this.updateModel();
  }
  setupScene = () => {
    //RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //SCENE
    let scene = new THREE.Scene();
    //LIGHTS
    let ambientLight = new THREE.AmbientLight(0x121212);
    let pointLight = new THREE.PointLight(0x009f9, 0.2);
    let rectLight = new THREE.RectAreaLight(0x121212, 1, 2000, 2000);
    rectLight.position.set(5, 50, 50);
    rectLight.lookAt(0, 0, 0);

    let camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );

    camera.position.z = 12;
    scene.add(rectLight);
    camera.add(pointLight);
    scene.add(ambientLight);
    scene.add(camera);

    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
    //EVENT LISTENERS

    window.addEventListener("mousemove", this.onDocumentMouseMove, true);
    this.start();
  };
  updateModel = () => {
    const material = new THREE.MeshPhysicalMaterial({
      color: "#505A7E",
      metalness: 0.5,
      roughness: 0.18
    });

    let gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load(
      require(`../assets/models/${this.props.onModel}.gltf`),
      gltf => {
        // let root = gltf.scene;
        // this.scene.add(root);
        // this.root = root;
        var root = gltf.scene;
        root.traverse(node => {
          if (!node.isMesh) return;
          node.material = material;
        });
        this.scene.add(root);
        this.root = root;
      }
    );
  };

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
  onDocumentMouseMove = event => {
    event.preventDefault();
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let mouseX = (event.clientX - windowHalfX) / 80;
    let mouseY = (event.clientY - windowHalfY) / 80;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.camera.position.x += this.mouseX - this.camera.position.x;
    this.camera.position.y += -this.mouseY - this.camera.position.y;
    this.camera.lookAt(this.scene.position);
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
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  componentDidUpdate() {
    this.updateModel();
    this.scene.remove(this.root);
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
