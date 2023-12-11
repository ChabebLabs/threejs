## Introduction à la 3D
Pour commencer, nous allons voir les bases de la 3D, WebGL et Three.js. Si vous êtes déjà familier avec ces concepts, vous pouvez passer directement à la [première scène](../lab1/README.md).
### La 3D et ses Composants

1. **La 3D sur le Web** : Imaginez la 3D comme un monde virtuel sur votre écran d'ordinateur. Au lieu de dessiner sur un papier plat, vous créez des formes qui ont de la profondeur, en plus de la largeur et de la hauteur.

2. **Modèles 3D** : Ces modèles sont comme des sculptures numériques. Ils sont faits de points appelés "sommets". Chaque sommet a des informations importantes :
   - **Position** : Où se trouve le sommet dans l'espace 3D.
   - **Normales** : Ce sont des flèches invisibles qui sortent de la surface du modèle. Elles aident à calculer comment la lumière rebondit sur la surface.
   - **Coordonnées UV** : Imaginez cela comme un autocollant. Les coordonnées UV expliquent comment appliquer cet autocollant (la texture) sur le modèle 3D.

3. **Éclairage et Textures** : Ils rendent le modèle réaliste. Les textures sont comme la peau ou les vêtements du modèle, et l'éclairage détermine comment les choses brillent ou sont dans l'ombre.

### WebGL: Le Moteur de Rendu

1. **WebGL** : C'est la magie derrière les graphiques 3D sur le web. Il permet de créer et de contrôler ces graphiques directement dans votre navigateur.

2. **Shaders** : Ce sont des petits programmes qui disent à l'ordinateur comment dessiner votre modèle 3D.
   - **Vertex Shader** : Il s'occupe de chaque sommet du modèle, comme les déplacer ou les animer.
   - **Fragment Shader** : Il décide de la couleur de chaque petit point (pixel) sur votre modèle, en se basant sur la lumière et la texture.

3. **Uniforms** : Ils fournissent des informations constantes aux shaders, comme la position de la caméra ou la manière dont les choses doivent être déplacées ou tournées.

### Three.js: Simplification et Abstraction

1. **Three.js** : C'est une boîte à outils qui facilite l'utilisation de WebGL. Il masque les détails techniques complexes, vous permettant de créer des mondes 3D plus facilement.

2. **Objets de Haut Niveau** : Three.js vous donne des outils simples pour manipuler des caméras, des lumières et des matériaux, rendant la création de scènes 3D beaucoup plus intuitive.

3. **Gestion des Ressources** : Il simplifie l'importation et l'utilisation de ressources comme les textures et les modèles 3D.

### Intégration et Fonctionnement

1. **Création de Scènes** : Vous commencez par créer des modèles 3D, définir leurs propriétés, et les placer dans une scène virtuelle.

2. **Caméras et Vues** : Vous ajustez la caméra pour déterminer ce que voit l'utilisateur. Vous pouvez choisir une vue de type "perspective" (comme dans la vie réelle) ou "orthographique" (comme un plan architectural).

3. **Rendu** : Three.js utilise WebGL pour dessiner votre scène 3D sur le navigateur, en utilisant les shaders et toutes les informations que vous avez fournies.

## Que faire ensuite ?
Vous pouvez maintenant passer à la [première scène](../lab1/README.md) pour créer votre première scène 3D avec Three.js.