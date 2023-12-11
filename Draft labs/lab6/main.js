// Import three.js
import * as THREE from 'three';

// Import GLTFLoader
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const fov = 75; // Field of view, in degrees.
const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
const near = 0.1; // Near clipping plane
const far = 1000; // Far clipping plane
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.set(0, 1.2, 2)

// Instantiate a loader
const loader = new GLTFLoader();
// Load a glTF resource
loader.load(
	'leonard.glb',
	// called when the resource is loaded
	( gltf ) => {
		scene.add( gltf.scene );

	},
	// called while loading is progressing
	( xhr ) => {

        console.log("Percentage loaded",  xhr.loaded / xhr.total * 100 );

	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened', error);

	}
);

// Create a light and add it to the scene
const light = new THREE.PointLight(0xeeeeee, 50);
light.position.set(0, 4, 4);
scene.add(light);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Animate the cube
function animate() {
    requestAnimationFrame( animate );   
    renderer.render( scene, camera );
}

// Start the animation loop
animate();