// Import three.js
import * as THREE from "three";

// Import GLTFLoader
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

let mixer;
const animations = {};
let clock;

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const fov = 75; // Field of view, in degrees.
const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
const near = 0.1; // Near clipping plane
const far = 1000; // Far clipping plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 1.2, 2);

// Instantiate a loader
let loader = new FBXLoader();

// Charger le fichier FBX
loader.load("idle.fbx", (object) => {
  object.scale.set(0.01, 0.01, 0.01); // Réduire la taille du modèle
  mixer = new THREE.AnimationMixer(object);
  const idleAction = mixer.clipAction(object.animations[0]); // Supposons que l'animation idle est la première
  idleAction.play();
  animations["idle"] = mixer.clipAction(object.animations[0]);


  scene.add(object);
  loader = new FBXLoader();
  loader.load("walking.fbx", (object) => {
    animations["walking"] = mixer.clipAction(object.animations[0]);
  });
  loader = new FBXLoader();
  loader.load("dancing.fbx", (object) => {
    animations["dancing"] = mixer.clipAction(object.animations[0]);
  });
});


document.addEventListener("keydown", (event) => {
  const key = event.key;
  let action;
  switch (key) {
    case "a":
    case "A":
    case 65:
      action = animations["dancing"];
      break;
    case "z":
    case "Z":
    case 90:
      action = animations["walking"];
      break;
    case "e":
    case "E":
    case 69:
      action = animations["idle"];
      break;
  }

  if (!action) {
    return;
  }
  action.play();
});


// Create a light and add it to the scene
const light = new THREE.PointLight(0xeeeeee, 50);
light.position.set(0, 4, 4);
scene.add(light);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animate the cube
clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  renderer.render(scene, camera);
}

// Start the animation loop
animate();
