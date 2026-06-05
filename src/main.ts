// 1. Importar array de dades (Mock)
import { videogameMock } from "./data/videogame.mock";
import { deleteVideogames } from "./logic/deleteVideogame";

// 2. Importar la funció creada a render.ts
import { renderTop3, renderVideogames } from "./logic/render";

//Crear la variable mutable a dalt del tot
let currentGames = videogameMock;

// 3. EXECUTAR la funció pasant-li el catàleg de jocs per carregar-los a la pantalla
renderVideogames(currentGames);
renderTop3(currentGames);

//DELETE VIDEOGAMES: COM ESCOLTAR CLICS DELS USUARIS PER RECONÈIXER LA ID DELS VIDEOJOCS I ELIMINAR-LOS?

// Escoltar els clics de l'usuari
const catalogueContainer = document.getElementById("catalogue");

if (catalogueContainer) {
  catalogueContainer.addEventListener("click", (event: MouseEvent) => {
    //Fa que el catàleg escolti els clics de l'usuari
    event.currentTarget; //És el pare (el catàleg); sempre serà l'element que té posat l'.addEventListener (per fer que fos només el botó, seria event.target)

    //Guardem l'element exacte premut (el botó) tractant-lo com un element HTML
    const clickedElement = event.target as HTMLElement;

    //Comprovem si aquest element té la classe dels nostres botons de borrar i li llegim el data-id
    if (clickedElement.classList.contains("btn-games")) {
      const videogameId = clickedElement.dataset.id;

      // Reasignar la variable actual > funció deleteVideogame.ts
      currentGames = deleteVideogames(currentGames, Number(videogameId));

      // i amb el resultat que li tornis, tornar a executar els renders per actualitzar la pantalla.
      renderVideogames(currentGames);
      renderTop3(currentGames);
    }
  });
}
