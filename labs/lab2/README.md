# Ajouter un skybox
Dans ce lab, nous allons ajouter un skybox à la scène. les skybox sont des objets 3D qui sont pré-calculés et qui sont utilisés pour l'éclairage. Nous allons faire les étapes suivantes:
- **[Etape 1: Préparer la scène](#étape-1-préparer-la-scène) :** Nous allons préparer la scène pour ajouter le skybox.
- **[Etape 2: Ajouter un skybox](#étape-2-ajouter-un-skybox) :** Nous allons ajouter un skybox à la scène.
- **[Etape 3: Exécuter le code](#étape-3-exécuter-le-code) :** Nous allons exécuter le code et voir le résultat.

Vous pouvez voir le code en entier [ici](#code-complet). et voir le résulta de la scène [ici](#result).




## Étape 1: Préparer la scène
Nous commencer par le code résultat de l'étape précédente.
- [`index.html`](../lab1/README.md#indexhtml)
- [`main.js`](../lab1/README.md#mainjs)


## Étape 2: Ajouter un skybox
Ajoutez le code suivant à la fin de `main.js`:
```js
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg',
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
  'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg',
]);
scene.background = texture;
```
- `CubeTextureLoader` est utilisé pour charger les images du skybox. Il prend un tableau de 6 images, une pour chaque face du skybox. il y a d'autres types de textures, vous pouvez les voir [ici](https://threejs.org/docs/#api/en/loaders/TextureLoader).
- `scene.background = texture` définit la texture du skybox comme arrière-plan de la scène.

## Étape 3: Exécuter le code
Ouvrez `index.html` dans votre navigateur et vous devriez voir un skybox avec un cube orange tournant sur un fond blanc.

# Code complet
## `index.html`
```html
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Votre première scène</title>
    <style>
        body {
            margin: 0;
        }
        
        canvas {
            width: 100%;
            height: 100%
        }
    </style>
    <script type="importmap">
        { "imports": { "three": "https://unpkg.com/three@0.159.0/build/three.module.js", "three/addons/": "https://unpkg.com/three@0.159.0/examples/jsm/" } }
    </script>
</head>

<body>
    <!--  Our code  -->
    <script type="module" src="main.js"></script>
</body>

</html>
```

## `main.js`
```js
import * as THREE from "three";

let scene, camera, renderer, cube;

const init = () => {
  // Création de la scène
  scene = new THREE.Scene();

  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg",
  ]);
  scene.background = texture;

  // Create the camera and set its position
  const fov = 75; // Field of view, in degrees.
  const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
  const near = 0.1; // Near clipping plane
  const far = 1000; // Far clipping plane
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;

  // Création du rendu
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a cube and add it to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Ajout de lumières
  const color = 0xffffff;
  const intensity = 1;
  let hlight = new THREE.AmbientLight(color, intensity);
  scene.add(hlight);

  // Démarrage de l'animation
  animate();
};

// Loop for animation
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

init();
```

# Result
![result](./result.png)