# Commencer avec Three.js

Pour commencer avec Three.js dans un environnement HTML, vous aurez besoin de quelques éléments de base : un fichier HTML pour votre structure de page et un peu de JavaScript pour intégrer Three.js. Voici un guide étape par étape pour démarrer :

## Étape 1 : Préparation de l'Environnement

1. **Créer un fichier HTML** : Commencez par créer un fichier HTML. Vous pouvez le nommer `index.html`. Ajouter le contenu suivant :

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
</head>

<body>
</body>

</html>
```

2. **Créer un fichier JavaScript** : Créez un fichier JavaScript nommé `main.js`. Ce fichier contiendra le code Three.js. Pour le moment, vous pouvez créer le fichier et le laisser vide.


## Étape 2 : Inclure Three.js
Il y a plusieurs façons d'inclure Three.js dans votre projet. La plus simple est d'utiliser un CDN (Content Delivery Network). Ajoutez la ligne suivante dans la balise `<head>` de votre fichier HTML après le tag `<style>` :

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js"></script>
   ```

## Étape 3 : Création de la Scène

### Référencer le Script JavaScript
Dans la balise `<body>` du fichir `index.html`, juste avant la fermeture `</body>`, ajoutez une balise `<script>` pour votre code JavaScript.

   ```html
   <script type="module" src="main.js"></script>
   ```

### Initialiser la Scène
Dans votre script, commencez par créer une scène, une caméra et un moteur de rendu.

* **Intialisations de la Scène**
```javascript
const scene = new THREE.Scene();
```
> - Cette ligne crée une nouvelle scène en utilisant Three.js. La scène est l'espace de travail où vous placez des objets, des lumières, des caméras, et d'autres éléments nécessaires à la réalisation de votre environnement 3D. Vous pouvez considérer la scène comme un "monde" virtuel dans lequel tous vos éléments graphiques 3D interagissent.

* **Initialisation de la Caméra**
```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
```
> Dans Three.js, plusieurs types de caméras sont disponibles, la plus courante étant la caméra perspective. Elle imite la façon dont l'œil humain voit le monde, rendant les objets plus petits lorsqu'ils sont plus éloignés. 
> - Le premier paramètre (`75`) est l'angle de champ de vision en degrés, ce qui affecte l'étendue de la scène visible à tout moment.
> - Le deuxième paramètre est le rapport d'aspect (`window.innerWidth / window.innerHeight`), qui détermine la largeur et la hauteur de la zone de visualisation. Il est important de le garder proportionnel aux dimensions de la fenêtre du navigateur pour éviter la distorsion.
> - Les troisième et quatrième paramètres (`0.1` et `1000`) sont les plans de coupe près et loin. Ils définissent la plage dans laquelle les objets sont visibles dans la caméra. Tout objet en dehors de cette plage ne sera pas rendu.

* **Initialisation du Moteur de Rendu**
```javascript
const renderer = new THREE.WebGLRenderer();
```
> - Cette ligne crée un moteur de rendu utilisant WebGL. WebGL est une API pour le rendu de graphiques 2D et 3D dans le navigateur sans avoir besoin de plugins supplémentaires. Le moteur de rendu est responsable de la création de l'image finale basée sur la scène et la caméra.

* **Configurer le Moteur de Rendu**
```javascript
renderer.setSize(window.innerWidth, window.innerHeight);
```
> - Ici, on définit la taille du rendu. Dans ce cas, il est réglé pour remplir toute la fenêtre du navigateur. Cela garantit que votre scène 3D occupe tout l'espace disponible dans la fenêtre du navigateur.

* **Ajouter le Moteur de Rendu au Document**
```javascript
document.body.appendChild(renderer.domElement);
```
> - Enfin, cette ligne ajoute le canevas généré par le moteur de rendu (`renderer.domElement`) au corps du document HTML. C'est ce canevas qui affiche la scène 3D rendue à l'écran.

Ensemble, ces lignes de code constituent la base pour commencer à travailler avec Three.js, en configurant l'espace dans lequel vous pouvez créer et manipuler des objets 3D, contrôler la façon dont ils sont visualisés et afficher le résultat dans le navigateur.


### Ajouter un Objet
Créez un cube simple comme objet de test.

* **Créer une géometrie**
```javascript
const geometry = new THREE.BoxGeometry();
```
> - Cette ligne crée une géométrie de cube standard. `THREE.BoxGeometry` est une classe dans Three.js qui définit la forme et la structure d'un cube. Sans paramètres supplémentaires, elle crée un cube avec une taille de 1 unité sur chaque axe (x, y, z).

* **Créer un Matériau**
```javascript
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
```
> - Ici, un matériau est créé pour le cube. `THREE.MeshBasicMaterial` est une classe simple qui permet d'appliquer une couleur uniforme et un simple éclairage sans ombres. Le paramètre `{ color: 0xFFA500 }` définit la couleur du matériau en hexadécimal (dans ce cas, un orange).

* **Créer un Maillage**
```javascript
const cube = new THREE.Mesh(geometry, material);
```
> - Cette ligne crée un maillage (mesh) en combinant la géométrie du cube et le matériau. Un "mesh" dans Three.js est un objet qui prend une géométrie et un matériau, et il est utilisé pour dessiner des objets 3D avec des propriétés comme la forme, la couleur et la texture. 

* **Ajouter le Cube à la Scène**
```javascript
scene.add(cube);
```
> - Enfin, cette ligne ajoute le cube à la scène. Comme mentionné précédemment, la scène est un conteneur pour tous les objets 3D, lumières, caméras, etc., que vous souhaitez rendre. En ajoutant le cube à la scène, vous le rendez visible lorsque la scène est rendue par le moteur de rendu.

En résumé, ce code crée un cube orange simple et l'ajoute à la scène Three.js pour qu'il soit rendu. C'est un exemple fondamental pour commencer avec Three.js, montrant comment créer des objets basiques, les styler, et les intégrer dans votre espace 3D.


### Positionner la Caméra
La caméra doit être déplacée pour qu'elle ne soit pas à l'intérieur du cube.

   ```javascript
   camera.position.z = 5;
   ```

## Étape 4 : Animation de la Scène

Créer la fonction d'animation. Elle est utilisée pour créer une boucle d'animation, permettant d'animer des objets dans votre scène 3D. Voici une explication de chaque partie du code

### Initialiser la Fonction d'Animation

```javascript
cont animate = () => {
    requestAnimationFrame(animate);
    ...
}
```
> - La fonction `animate()` est définie ici. Elle sera appelée à chaque fois qu'une nouvelle frame d'animation est prête à être rendue. 

> - `requestAnimationFrame(animate)` est une méthode intégrée dans JavaScript pour les animations. Elle demande au navigateur de planifier un rafraîchissement de la fenêtre pour la prochaine animation. Cette méthode prend une fonction de rappel (`animate` dans ce cas) qui est appelée avant le prochain rafraîchissement. L'utilisation de `requestAnimationFrame` assure une animation fluide et synchronisée avec le taux de rafraîchissement de l'écran du navigateur.

### Animer le Cube

```javascript
// Rotation du cube
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```
> - Ces lignes de code appliquent une rotation au cube. `cube.rotation.x` et `cube.rotation.y` ajustent respectivement la rotation autour des axes X et Y du cube.

> - L'augmentation progressive des valeurs de rotation (`+= 0.01`) à chaque appel de la fonction `animate()` crée un effet de rotation continue. La valeur `0.01` détermine la vitesse de rotation - des valeurs plus grandes rendront la rotation plus rapide.

### Rendre la Scène
```javascript
renderer.render(scene, camera);
```
> - Cette ligne est l'appel au moteur de rendu pour dessiner la scène à partir de la perspective de la caméra. `renderer.render(scene, camera)` indique à Three.js de rendre (ou de redessiner) la scène en tenant compte de la position actuelle et de l'orientation de la caméra, et des états actuels de tous les objets dans la scène (comme la rotation du cube dans ce cas).

```javascript
animate();
```
- Finalement, `animate()` est appelée pour démarrer la boucle d'animation. Lorsque cette fonction est exécutée, elle crée une boucle infinie qui continue de redessiner la scène avec la rotation mise à jour du cube à chaque frame.

En résumé, ce code crée une boucle d'animation qui fait tourner un cube autour de ses axes X et Y, et met à jour l'affichage de la scène à chaque frame pour une animation fluide.




1. **Créer une Fonction de Rendu** : Cette fonction sera appelée à chaque frame pour mettre à jour et rendre la scène.

Explique ce code 
   ```javascript
   function animate() {
       requestAnimationFrame(animate);

       // Rotation du cube
       cube.rotation.x += 0.01;
       cube.rotation.y += 0.01;

       renderer.render(scene, camera);
   }
   animate();
   ```

## Étape 5 : Exécution

1. **Ouvrir le Fichier HTML** : Ouvrez votre fichier `index.html` dans un navigateur pour voir le résultat.

### Conclusion

Vous avez maintenant une scène Three.js basique avec un cube animé. C'est un point de départ pour explorer plus en détail les capacités de Three.js, comme l'ajout de lumières, de textures, et l'interaction avec les objets 3D. Vous pouvez également apprendre à gérer les événements, comme les clics de la souris ou les redimensionnements de la fenêtre, pour créer des expériences interactives plus complexes.