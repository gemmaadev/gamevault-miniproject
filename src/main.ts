// 1. Importar array de dades (Mock)
import { videogameMock } from "./data/videogame.mock";
import { deleteVideogames } from "./logic/deleteVideogame";
import { addVideogames } from "./logic/addVideogame";

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
      const videogameId = clickedElement.dataset.id; //.dataset llegeix tots els atributs HTML que comencen per "data-"

      // Reasignar la variable actual > funció deleteVideogame.ts
      currentGames = deleteVideogames(currentGames, Number(videogameId));

      // i amb el resultat que li tornis, tornar a executar els renders per actualitzar la pantalla.
      renderVideogames(currentGames);
      renderTop3(currentGames);
    }
  });
}

//ADD VIDEOGAMES: COM ESCOLTAR CLIC DEL FORMULARI PER RECONÈIXER L'OBJECTE NOU VIDEOJOC I AFEGIR-LO?

const formsContainer = document.getElementById(
  "add-game-form",
) as HTMLFormElement;

//Comprovem si el formulari existeix a la pantalla
if (formsContainer) {
  formsContainer.addEventListener("submit", function (event: SubmitEvent) {
    //Escoltar l'esdeveniment d'enviament de formulari
    event.preventDefault(); //Fa que el navegador no refresqui la pàgina
    // Llegim el que hi ha escrit a cada input i creem un objecte nou amb l'estructura del tipus Videogame
    const newVideogame = {
      id: Date.now(), // ID única automatitzada
      title: (document.getElementById("new-game") as HTMLInputElement).value,
      genre: (document.getElementById("genre") as HTMLInputElement).value,
      platform: (document.getElementById("platform") as HTMLInputElement).value,
      rating: Number(
        (document.getElementById("rating") as HTMLInputElement).value,
      ),
      year: Number(
        (document.getElementById("release-year") as HTMLInputElement).value,
      ),
      cover: (document.getElementById("game-image") as HTMLInputElement).value,
    };

    //Afegim aquest nou objecte a la nostra variable global currentGames
    currentGames = addVideogames(currentGames, newVideogame);

    //Netegem
    formsContainer.reset();

    // Tornem a cridar a renderVideogames(currentGames)
    // per tal que pinti la llista actualitzada amb el nou joc inclòs.
    renderVideogames(currentGames);
    renderTop3(currentGames);
  });
}
