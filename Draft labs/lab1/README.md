# Lab 1 - Votre première scène
## Create `index.html`
Create a file named `index.html` in a folder named `lab1`
```html
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Votre première scène</title>
</head>

<body>
</body>

</html>
```
It's a simple HTML page with no content

## Add Three.js CDN
```html
<script type="importmap">
        { "imports": { "three": "https://unpkg.com/three@0.159.0/build/three.module.js", "three/addons/": "https://unpkg.com/three@0.159.0/examples/jsm/" } }
</script>
```
- The importmap is used to import modules in JavaScript. It's a new feature of JavaScript, so it's not supported by all browsers. It's used to import Three.js modules.
- The `three` import is used to import the Three.js library
- The `three/addons/` import is used to import Three.js addons like the GLTFLoader

## Create `main.js`
it's the main JavaScript file of the project. Create it in the same folder as `index.html`

## Import `main.js` in `index.html`
```html
<script type="module" src="main.js"></script>
```
The `type="module"` attribute is used to import JavaScript modules

## import `THREE` from `three`
```js
import * as THREE from 'three';
```
The `* as THREE` syntax is used to import all the exports of the `three` module in the `THREE` variable

## Create a scene
```js
const scene = new THREE.Scene();
```
The scene is the container of all the objects of the scene

## Create a camera and set its position
```js
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.z = 5;
```
- `PerspectiveCamera` is a type of camera. There are many types of cameras, but the `PerspectiveCamera` is the most used. It's used to render a 3D scene in perspective. Other types of cameras can be found here: https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera
- The camera neads the following parameters
  - **FOV :** Field of view, the angle of the camera. It's the angle between the top and the bottom of the camera, in degrees. for example, a value of 90 means that the camera will see 90 degrees vertically.
  - **Aspect ratio :** The ratio between the width and the height of the camera. It's the width divided by the height.
  - **Near clipping plane** and **far clipping plane**: The distance from the camera where objects are rendered. Objects that are closer than the near clipping plane or farther than the far clipping plane are not rendered. It's used to improve performance. The near clipping plane must be greater than 0 and the far clipping plane must be greater than the near clipping plane.
- The camera is positioned at (0, 0, 5) in the scene, so it's 5 units away from the center of the scene.

## Add the renderer
Create the renderer, set its size and add it to the DOM
```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
```
The renderer renders the scene. It can be a WebGL renderer or a canvas renderer. In this case, we use a WebGL renderer. The WebGL renderer uses WebGL to render the scene. WebGL is a JavaScript API that allows to render 3D graphics in the browser. It's supported by all modern browsers. The canvas renderer uses the HTML5 canvas to render the scene. It's not used anymore because it's slower than the WebGL renderer.
- The renderer is created with `new THREE.WebGLRenderer()`
- The size of the renderer is set with `renderer.setSize( window.innerWidth, window.innerHeight )`. The size of the renderer is the size of the canvas that is used to render the scene. 
- The renderer is added to the DOM with `document.body.appendChild(renderer.domElement)`. The `domElement` property of the renderer is the canvas that is used to render the scene.

## Add the cube
Create a geometry, a material and a cube, then add the cube to the scene
```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFA500 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
```
- The geometry is created with `new THREE.BoxGeometry( 1, 1, 1 )`. The `BoxGeometry` is a type of geometry. There are many types of geometries. It's used to create a cube. Other types of geometries can be found here: https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
- The material is created with `new THREE.MeshBasicMaterial( { color: 0xFFA500 } )`. The `MeshBasicMaterial` is a type of material. There are many types of materials. It's used to create a material with a solid color, in this case orange. Other types of materials can be found here: https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial
- The cube is created with `new THREE.Mesh( geometry, material )`. The `Mesh` is a type of object. There are many types of objects. It's used to create an object with a geometry and a material. Other types of objects can be found here: https://threejs.org/docs/index.html#api/en/objects/Mesh

## Create the animation loop
Create the `animate` function that will be called at each frame. Typical threejs scene has 60fps, so the `animate` function is called 60 times per second.
```js
const animate = () => {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();
```
- `requestAnimationFrame` is a function that calls the `animate` function at each frame
- `renderer.render` renders the scene with the camera

## Add cube animation
Add cube rotation in the animation.
```js
const animate = () => {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};
```
The `cube.rotation` is an object with the `x`, `y` and `z` properties. The rotation is in radians, so we add 0.01 radians at each frame. The degres to radians conversion is `radians = degres * Math.PI / 180`.

