import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// **
//? CANVAS
// **
const canvas = document.querySelector(".webgl");

// **
//? SCENE
// **
const scene = new THREE.Scene();

// **
//? OBJECTS
// **

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// *
//? SIZES
// *
const sizes = {
  width: 800,
  height: 600,
};

// *
//? CAMERA
// *
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// *
//? RERENDER
// *

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

//Clock
const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// *
//? ANIMATIONS
// *
function tick() {
  // Clock
  // const elapsedTime = clock.getElapsedTime();
  // Update objects
  // camera.position.y = Math.sin(elapsedTime);
  // camera.position.x = Math.cos(elapsedTime);
  // camera.lookAt(mesh.position);

  // Update objects
  // sphere.rotation.y = 0.1 * elapsedTime;
  // cube.rotation.y = 0.1 * elapsedTime;
  // torus.rotation.y = 0.1 * elapsedTime;

  // sphere.rotation.x = 0.15 * elapsedTime;
  // cube.rotation.x = 0.15 * elapsedTime;
  // torus.rotation.x = 0.15 * elapsedTime;

  //Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

tick();
