# Introduction 3D, webGL et ThreeJs

Pour mieux comprendre la 3D sur le web, en particulier avec WebGL et Three.js, il est essentiel de plonger dans les détails des concepts mentionnés précédemment et de voir comment ils s'intègrent dans le fonctionnement de ces technologies.

## La 3D et ses Composants
La 3D dans le contexte du web implique la création de graphiques qui simulent la profondeur en plus de la largeur et de la hauteur. Les éléments clés de la 3D comprennent:

* **Modèles 3D :** Constitués de sommets, chacun ayant des attributs comme la position, les normales, et les coordonnées UV.
    * **Position :** Chaque sommet a une position dans l'espace 3D, formant la structure de l'objet.
    * **Normales :** Vecteurs perpendiculaires à la surface du modèle, utilisés pour calculer l'éclairage et les effets de surface.
    * **Coordonnées UV :** Déterminent comment les textures 2D sont appliquées sur les surfaces 3D.
* **Éclairage et Textures :** Vital pour le réalisme. Les textures habillent les surfaces, tandis que l'éclairage affecte la façon dont ces surfaces apparaissent.

## WebGL: Moteur de Rendu Bas Niveau
WebGL, en tant que moteur de rendu bas niveau, permet une manipulation directe de la pipeline graphique:

* **Shaders :** Les shaders sont des programmes qui s'exécutent sur le GPU, et qui sont responsables du rendu des modèles 3D.
    * **Vertex Shader :** Traite chaque sommet individuellement, utilisant des attributs comme la position. Il peut manipuler ces positions pour des effets comme les animations.
    * **Fragment Shader :** Calcule la couleur de chaque pixel, influencée par des éléments comme la texture, l'éclairage et la couleur de la surface.
* **Uniforms :** Fournissent des informations constantes aux shaders, comme les transformations et l'éclairage. 
    * **Model Matrix :** Matrice qui représente les transformations (translation, rotation, mise à l'échelle) appliquées à un modèle 3D.
    * **View Matrix :** Matrice de vue qui représente la position et l'orientation de la caméra dans la scène.
    * **Projection Matrix :** Matrice de projection qui définit comment la scène 3D est projetée sur l'écran 2D, par exemple, en utilisant une projection perspective.
    * **Texture :** Référence à une texture qui sera appliquée aux objets 3D.
    * **Direction Light :** Informations sur une lumière directionnelle dans la scène, comme sa direction et sa couleur.
    * **Color Light :** Couleur de la lumière appliquée à la scène.

### Three.js: Abstraction et Facilité d'Utilisation
Three.js s'appuie sur WebGL pour offrir une interface plus conviviale:

* **Abstraction des Détails Techniques :** Cache la complexité des shaders et de la gestion de la mémoire, permettant aux développeurs de se concentrer sur la création de la scène.
* **Objets Haut Niveau :** Comme des caméras, des lumières (e.g., DirLight pour une lumière directionnelle), et des matériaux qui sont plus intuitifs à manipuler.
* **Gestion des Ressources :** Simplifie l'importation et l'utilisation de textures, modèles 3D, et autres ressources graphiques.

### Intégration et Fonctionnement
Dans une application typique utilisant Three.js et WebGL:

* **Modèles et Scènes :** Les développeurs créent des modèles 3D, définissent leurs attributs, et les placent dans une scène.
* **Caméras et Vues :** La View Matrix est ajustée en fonction de la position de la caméra, tandis que la ProjMatrix est configurée pour le type de projection (perspective ou orthographique).
* **Rendu :** Three.js utilise WebGL pour exécuter les vertex et fragment shaders, avec les données fournies (attributs et uniforms) pour rendre la scène sur le canevas du navigateur.