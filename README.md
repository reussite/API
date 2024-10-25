# API d'Inscription des Étudiants

Cette API permet de gérer les informations d'inscription des étudiants, notamment en ajoutant et en récupérant leurs informations via une base de données MongoDB.

## Technologies utilisées

- **Node.js** : Serveur backend.
- **Express** : Framework pour gérer les routes et les requêtes HTTP.
- **Prisma ORM** : ORM utilisé pour interagir avec MongoDB.

## Architecture du Projet

Le projet est organisé en plusieurs dossiers :

- **models** : Contient les modèles de données définis avec Prisma.
- **controllers** : Gère la logique métier et les réponses des requêtes.
- **routes** : Définit les points de terminaison de l'API.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 14 ou supérieure)
- **MongoDB** (instance locale ou distante)

## Étapes d'installation

Suivez les étapes ci-dessous pour installer et configurer le projet.

### 1. Cloner le dépôt

Clonez le dépôt sur votre machine locale et accédez au dossier du projet :

```bash
git clone https://github.com/reussite/API.git
cd API
