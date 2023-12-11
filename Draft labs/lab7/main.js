// Import three.js
import * as THREE from "three";

// Import GLTFLoader
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

let mixer;

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
const loader = new FBXLoader();

// Charger le fichier FBX
loader.load("idle.fbx", (object) => {
  mixer = new THREE.AnimationMixer(object);

  const idleAction = mixer.clipAction(object.animations[0]); // Supposons que l'animation idle est la première
  idleAction.play();

  console.log("object", object);

  object.scale.set(0.01, 0.01, 0.01); // Réduire la taille du modèle

  scene.add(object);
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
function animate() {
  requestAnimationFrame(animate);

  if (mixer) mixer.update(0.01);

  renderer.render(scene, camera);
}

// Start the animation loop
animate();
