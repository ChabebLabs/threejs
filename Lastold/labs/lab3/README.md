# Lab 3 : Comprendre les textures
- Charger une image pour la texture
```js
const texture = new THREE.TextureLoader().load('diamond.jpg');
```

- Utiliser la texture dans le material
```js
const material = new THREE.MeshPhongMaterial({
    map: texture
});
```

## Final code
- `index.html`
```html
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Three.js introduction</title>
    <style>
        body {
            margin: 0;
        }
    </style>
    <!--  Three.js CDN  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js"></script>
</head>

<body>
    <!--  Our code  -->
    <script type="module" src="main.js"></script>
</body>

</html>
```

- `main.js`
```js

// Create scene
const scene = new THREE.Scene();

// Create camera and set position
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create renderer and set size, then add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load('diamond.jpg')
const material = new THREE.MeshPhongMaterial({ map:texture })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create light, set position and add it to the scene
const light = new THREE.PointLight(0xffffff, 5, 100);
light.position.set(0, 0, 5);
scene.add(light);

// Animate scene
const animate = () => {
    requestAnimationFrame(animate);

    // Rotation du cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
```

## Résultat
![Lab 3 result](./result.png)