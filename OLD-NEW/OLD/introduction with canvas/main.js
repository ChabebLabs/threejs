

/**
 * STEP - 1 : Creating the scene 
 * The scene will contains all our elements such as objects and lights.
*/
const scene = new THREE.Scene();

/**
 * STEP - 2 : Creating the camera 
 * The first parameter is the field of view (FOV), it is the extent of the scene that is seen on the display at any given moment.
 * The second parameter is the aspect ratio, it should be the width of the output divided by the height.
 * The third parameter is the near clipping plane, anything before that will not be rendered.
 * The fourth parameter is the far clipping plane, anything further away from the camera than the far clipping plane will not be rendered.
 */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

/**
 * STEP - 3 : Creating the renderer
 * The renderer is what takes the scene and the camera and creates the actual pixels that we see on the screen.
 * The renderer is also used to create shadows in the scene.
 * We set the size of the output canvas to the width and height of the window and we also enable something called device pixel ratio which will help us to have a crisp image on retina displays.
 * Lastly, we add the canvas that Three.js created for us to the html document.
 */
const canvas = document.getElementById('canvas');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

/**
 * STEP - 4 : Creating the cube
 * We create a BoxGeometry of width, height, and depth equal to 1.
 * Then we create a MeshBasicMaterial with a color red, The MeshBasicMaterial is one of the most basic materials in Three.js. We put an orange color. It doesn't require any lighting.
 * Finally, we create a mesh by combining the geometry and material.
 * We add the mesh to the scene.
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/**
 * STEP - 5 : Setting the camera position
 * We move the camera out by 5 units on the z-axis so that it is not inside the cube.
 */
camera.position.z = 5;

/**
 * STEP - 6 : Rendering the scene
 * We render the scene using the renderer in the animate function.
 * We also rotate the cube a little bit on both the x-axis and the y-axis.
 * We then request the browser to call animate at a frame rate of 60fps.
 */
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();