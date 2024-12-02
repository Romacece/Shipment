# Shipment History / Historique des expéditions

## Description

This web application displays shipment history in an interactive and responsive way. It uses JSON data to dynamically generate shipment cards grouped by date.

Cette application web permet d'afficher l'historique des expéditions de manière interactive et responsive. Elle utilise des données JSON pour générer dynamiquement des cartes d'expédition regroupées par date.


**Features / FONCTIONNALITES**

1. **Shipment Display / Affichage des expéditions**:
    - Shipments are grouped by date for easier navigation.
     Affichage des expéditions regroupées par date.

2. **Status Handling / Gestion des statuts** :
    - Delays in red and Exceptions in orange
     Retards (rouge) et exceptions (orange).
    - A "check" icon represents successful deliveries.
     Icône "check" représente les livraisons réussies.
    - A "map-marker" icon represents arrivals.
     Icône "map-marker" représente les arrivées.

3. **Long Comment Display / Affichage des commentaires longs** :
    - Comments exceeding three lines are hidden by default with a "View All" button.
      Les commentaires dépassant trois lignes sont masqués par défaut avec un bouton "Voir tout".
    - A smooth expansion effect is applied when comments are expanded or collapsed.
      Un effet de transition fluide est appliqué lorsque les commentaires sont développés ou réduits.

4. **Responsive Design / Design responsive**:
    - Optimized for both mobile and desktop screens.
      Optimisé pour les écrans mobiles et desktop.


---

## Technologies Used / Technologies utilisées

- **HTML** : Page structure / Structure de la page.
- **CSS** : Styling and responsiveness / Mise en forme et responsivité.
- **JavaScript** : Dynamic content and user interaction / Dynamisation du contenu et interaction utilisateur.
- **Clarity Icons** : Icons for shipment statuses / Icônes pour les statuts d'expédition.
- **Bootstrap 5** : Layout and responsive design /  Mise en page et design responsive.
- **Google Fonts (Montserrat)** : Typography /  Typographie.

---

## Installation and Execution / Installation et exécution

### **Prerequisites / Prérequis**
- A modern browser (Chrome, Firefox, Edge, etc.).
  Un navigateur moderne (Chrome, Firefox, Edge, etc.).

- A local server to load JSON files (Live Server for VS Code).
 Un serveur local pour charger les fichiers JSON ([Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) sur VS Code).


### **Steps / Étapes**
1. **Clone the repository / Clonez le dépôt** :
   ```bash
   git clone https://github.com/VOTRE_COMPTE_GITHUB/shipment-history.git
   cd shipment-history

2. **Lancez le serveur local** :
    - Open the index.html file in VS Code.
      Ouvrez le fichier index.html dans VS Code.
    - Right-click and select "Open with Live Server".
      Faites un clic droit et Sélectionnez "Open with Live Server".

---


Corrections Made / Corrections effectuées
JSON Files / Fichiers JSON
**Corrected a typo in the JSON data**:
**Correction de la propriété mal orthographiée** :
    - satus was corrected to status in shipment1.json and shipment2.json files.
      satus a été corrigé en status dans les fichiers shipment1.json et shipment2.json.

    - No other data was modified.
    Aucune autre donnée n'a été modifiée.


