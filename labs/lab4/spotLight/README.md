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