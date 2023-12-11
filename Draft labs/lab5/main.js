// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const fov = 75; // Field of view, in degrees.
const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
const near = 0.1; // Near clipping plane
const far = 1000; // Far clipping plane
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.z = 5;

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load('wood.jpg')
const material = new THREE.MeshPhongMaterial({ map:texture })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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
    
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

// Start the animation loop
animate();