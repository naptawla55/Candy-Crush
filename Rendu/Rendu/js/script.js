import Grille from "./grille.js";

// 1. On définit une sorte de "programme principal"
// le point d'entrée du code qui sera appelé dès que la
// page ET SES RESSOURCES sont chargées

window.onload = init;

let grille;

function init() {
  console.log("Page et ressources prêtes à l'emploi");


  grille = new Grille(9, 9);
  grille.showCookies();
  updateScoreOnPage();

  let b = document.querySelector("#buttonTestAlignement");
  let chronometerStarted = false;

  b.onclick = () => {
    let isAlignement = grille.testAlignementDansTouteLaGrille();

    // Vérifier si le chronomètre n'est pas déjà en cours
    if (!chronometerStarted) {
      grille.startChronometer();
      chronometerStarted = true;
    }

    if (isAlignement) {
      grille.slide();
      updateScoreOnPage();
      updateNiveauOnPage(); // Ajoutez la mise à jour du niveau

      grille.showCookies();
    }
  };
}


function updateScoreOnPage() {
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = grille.getScore();
}

function updateNiveauOnPage() {
  let niveauElement = document.getElementById("niveau");
  niveauElement.textContent = `Niveau : ${grille.getNiveau()}`;
}