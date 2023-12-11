# Comprendre la lumière
Il y a plusieurs type de lumière dans three.js, dans ce lab nous allons explorer les différents types de lumière. Voici les lumière que nous allons explorer:
- **[Lumière ambiante](#lumière-ambiante) :** Une lumière qui ajoute une couleur constante à la scène.
- **[Lumière directionnelle](#lumière-directionnelle) :** Une lumière qui émet de la lumière dans une direction donnée.
- **[Lumière ponctuelle](#lumière-ponctuelle) :** Une lumière qui émet de la lumière dans toutes les directions à partir d'un point donné.
- **[Lumière spot](#lumière-spot) :** Une lumière qui émet de la lumière dans une direction donnée à partir d'un point donné.
- **[Lumière Hémisphérique](#lumière-hemisphérique) :** Une lumière qui émet de la lumière dans une direction donnée à partir d'un point donné.

# Lumière ambiante
La lumière ambiante émet une lumière douce qui illumine uniformément tous les objets de la scène sans ombres. Pour ajouter une lumière ambiante à la scène, nous utilisons `THREE.AmbientLight`:
```js
// Création d'une lumière ambiante
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
```
- `THREE.AmbientLight` prend deux paramètres:
  - `color` : La couleur de la lumière.
  - `intensity` : L'intensité de la lumière.
- `scene.add(ambientLight)` ajoute la lumière à la scène.

# Lumière directionnelle
La lumière directionnelle agit comme le soleil, avec des rayons qui viennent d'une direction spécifique. Elle est utile pour créer des ombres.
```js
// Création d'une lumière directionnelle
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
```
- `THREE.DirectionalLight` prend deux paramètres:
  - `color` : La couleur de la lumière.
  - `intensity` : L'intensité de la lumière.
- `directionalLight.position.set(0, 1, 0)` définit la position de la lumière.

# Lumière ponctuelle
La lumière ponctuelle émet de la lumière dans toutes les directions à partir d'un point. Elle est utile pour simuler des lampes et des bougies.
```js
// Création d'une lumière ponctuelle
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);
```
- `THREE.PointLight` prend trois paramètres:
  - `color` : La couleur de la lumière.
  - `intensity` : L'intensité de la lumière.
  - `distance` : La distance à laquelle la lumière commence à diminuer.
- `pointLight.position.set(10, 10, 10)` définit la position de la lumière.

# Lumière spot
La lumière spot fonctionne comme un projecteur, éclairant une zone spécifique et pouvant créer des ombres.
```js
// Création d'une lumière spot
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100, 1000, 1000);
spotLight.angle = Math.PI / 4;
scene.add(spotLight);
```
- `THREE.SpotLight` prend un paramètre:
  - `color` : La couleur de la lumière.
- `spotLight.position.set(100, 1000, 1000)` définit la position de la lumière.
- `spotLight.angle = Math.PI / 4` définit l'angle de la lumière. Dans ce cas l'angle est de 45 degrés.

# Lumière Hémisphérique
La lumière hémisphérique est une lumière douce provenant de toutes les directions d'un demi-hémisphère.
```js
// Création d'une lumière hémisphérique
const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemiLight);
```

- `THREE.HemisphereLight` prend trois paramètres:
  - `skyColor` : La couleur du ciel.
  - `groundColor` : La couleur du sol.
  - `intensity` : L'intensité de la lumière.
