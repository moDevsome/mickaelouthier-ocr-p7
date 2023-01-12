Répertoire du projet numéro 7 de la formation Developpeur web d'Openclassroom : **Créez une application web de location immobilière avec React**

## Mission

**Développez les fonctionnalités Front-end d'un site de location d’appartements entre particuliers.**

La partie Front-end de l'application est propulsée par le framework ReactJS.
- Développer les composants React et les pages de l'application;
- Développer la partie Router;
- Réaliser l'interface visuelle à partir des maquettes réalisées sur Figma;

## Compétences évaluées

- Initialiser une application avec Create React App
- Développer des éléments de l'interface d'un site web grâce à des composants React
- Configurer la navigation entre les pages de l'application avec React Router

## Architecture des sources

| Répertoire           | | Description |
| :---                 |:----:  | :---|
| src                  | => | Racine |
| /assets              | => | Contient les fichiers statiques (images, fichiers JSON, autres...)|
| /components          | => | Répertoire parent des composants |
| /components/blocks   | => | Répertoire contenant les composants uniques utilisés seulement une fois |
| /components/utils    | => | Répertoire contenant les composants réutilisables |
| /hooks               | => | Répertoire contenant les hooks |
| /pages               | => | Répertoire contenant les pages du projets |
| /scss                | => | Répertoire principale du code SCSS |
| /scss/base           | => | Répertoire des élements de base du SCSS |
| /scss/components     | => | Répertoire contenant le SCSS des composants réutilisables |
| /scss/layouts  | => | Répertoire contenant le SCSS des pages et des composants uniques |
| /scss/utils  | => | Répertoire contenant les fichiers des Keyframes, des Mixins et des Variables |
| /App.jsx  | => | Point d'entrée de l'application |
| /index.js | => | Fichier de base pour la compilation |

## Démarrage de l'Environnement de développement
1. Ouvrir un terminal et le faire pointer sur le répertoire du projet (celui où se trouve le fichier "package.json")
2. Executer la commande "npm start"

Pour compiler le CSS, ouvrir un autre terminal et executer la commande "npm run sass", le package SASS doit être présent sur votre machine.