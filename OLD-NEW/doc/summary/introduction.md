
# Introduction 3D, webGL et ThreeJs

## 3D et ses Composants
Dans le web, la 3D crée des graphiques avec profondeur, largeur et hauteur. Ses éléments principaux sont :

* **Modèles 3D :** Composés de sommets avec des attributs clés
    * **Position :** Localisation de chaque sommet dans l'espace 3D.
    * **Normales :** Vecteurs pour calculer l'éclairage et les effets de surface.
    * **Coordonnées UV :** Pour appliquer des textures 2D sur des surfaces 3D.
* **Éclairage et Textures :** Essentiels pour le réalisme des surfaces 3D.

## WebGL : Moteur de Rendu Bas Niveau
WebGL permet de contrôler directement la pipeline graphique :

* **Shaders** : Programmes qui s'exécutent sur le GPU, responsables du rendu 3D.
    * **Vertex Shader :** Gère chaque sommet, utilisant des attributs comme la position.
    * **Fragment Shader :** Détermine la couleur des pixels, influencée par textures et éclairage.
* **Uniforms :** Variables constantes pour les shaders, incluant les matrices de transformation et d'éclairage.

## Three.js : Abstraction et Facilité
Three.js, basé sur WebGL, simplifie la création 3D :

* **Abstraction Technique :** Masque la complexité des shaders et de la gestion de la mémoire.
* **Objets Haut Niveau :** Gestion simplifiée des caméras, lumières et matériaux.
* **Gestion des Ressources :** Facilite l'importation et l'utilisation de ressources 3D.

## Intégration et Fonctionnement
Dans l'usage de Three.js et WebGL :

* **Modèles et Scènes :** Création et placement des modèles 3D avec attributs définis.
* **Caméras et Vues :** Ajustement de la View Matrix selon la caméra et configuration de la ProjMatrix pour la projection.
* **Rendu :** Utilisation de WebGL par Three.js pour exécuter les shaders et rendre la scène dans le navigateur.