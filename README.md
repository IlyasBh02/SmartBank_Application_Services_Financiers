# SmartBank — Application FinTech (SPA)

SmartBank est un prototype d'application web FinTech développé en architecture Single Page Application (SPA). L'objectif est d'offrir une interface bancaire moderne et réactive permettant la gestion de compte en temps réel, la simulation de crédit personnalisée, un module de fidélité quotidien et l'accès à des opportunités financières.

---

## Fonctionnalités Principales

- **Tableau de Bord Financier** : Consultation dynamique du solde du compte principal (bonus de bienvenue de 50 € à l'inscription), affichage du numéro de compte FR76 et aperçu des transactions.
- **Authentification & Sécurité** : Inscription et connexion sécurisées avec hachage des mots de passe en SHA-256 via l'API Web Crypto et gestion de la session utilisateur.
- **Simulateur de Crédit Interactif** : Calcul en temps réel de la mensualité, du montant total dû et du coût global d'un prêt via curseurs interactifs. Possibilité d'enregistrer et de supprimer des simulations stockées en mémoire.
- **Offres Flash & Navigation** : Présentation d'opportunités à durée limitée et barre de navigation réactive avec gestion automatique des accès sécurisés (Auth Guard).
- **Historique des Transactions** : Consultation de l'historique bancaire avec filtrage et pagination.

---

## Choix Techniques & Architecture

- **Langages Natifs** : HTML5, CSS3 natif et JavaScript (Vanilla JS). Aucun framework ni bibliothèque externe.
- **Architecture SPA & Routage HTML5** : Routage géré par l'API HTML5 History (`pushState` / `popstate`) assurant des URLs propres (`/dashboard`, `/simulator`, `/profile`) et interception globale des clics sans rechargement de page.
- **Serveur de Développement Natif (`server.js`)** : Mini-serveur HTTP Node.js (sans dépendance externalisée) intégrant la règle de réécriture (SPA Fallback) vers `index.html` pour prévenir les erreurs 404 lors du rafraîchissement (F5).
- **Persistance des Données** : Module de stockage centralisé s'appuyant sur `localStorage` (`smartbank_users`, `smartbank_session`, `smartbank_simulations`).
- **Structure HTML Minimale** : Fichier `index.html` léger contenant le conteneur principal `<div id="root"></div>`.
- **Organisation Modulaire** :
  - `src/storage/` : Abstraction des opérations `localStorage`.
  - `src/security/` : Fonctions de hachage SHA-256, gestion de session et guard de routage.
  - `src/auth/` : Gestionnaires d'événements pour l'inscription et la connexion.
  - `src/components/` : Templates HTML et contrôleurs d'événements par vue.
  - `src/router/` : Moteur de routage et gestion des pages non trouvées (404).
  - `src/styles/` : Fichiers CSS découpés par composant avec variables globales.

---

## Arborescence du Projet

```text
smart-bank/
├── package.json
├── README.md
├── server.js
├── public/
│   ├── index.html
│   └── assets/
│       ├── favicon.png
│       └── logo.jpg
└── src/
    ├── app.js
    ├── auth/
    │   └── auth.js
    ├── components/
    │   ├── AuthView.js
    │   ├── DashboardView.js
    │   ├── Navbar.js
    │   ├── OffersView.js
    │   ├── ProfileView.js
    │   ├── SimulatorView.js
    │   └── TransactionsView.js
    ├── router/
    │   └── router.js
    ├── security/
    │   └── security.js
    ├── storage/
    │   └── storage.js
    └── styles/
        ├── auth.css
        ├── dashboard.css
        ├── main.css
        ├── navbar.css
        ├── offers.css
        ├── profile.css
        ├── simulator.css
        └── variables.css
```

---

## Installation & Lancement

1. Cloner ou télécharger le dépôt sur votre machine.
2. Exécuter le serveur de développement natif Node.js à la racine du projet :
   ```bash
   node server.js
   ```
3. Ouvrir votre navigateur à l'adresse `http://localhost:5500`.

---

## Suivi du Projet

La gestion et le suivi des tâches du projet ont été modélisés sur Jira (Epics, User Stories, Sub-tasks).
