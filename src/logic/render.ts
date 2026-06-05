import type { Videogame } from "../types/videogame";
import { top3Videogames } from "../logic/orderTop3";

//TOTES LES TARGETES DELS VIDEOJOCS

//PAS 3 PER RENDERITZAR CONTINGUT DINÀMIC: RECORRER ARRAY PER INJECTAR DINÀMICAMENT EL CODI HTML AL DOM FENT SERVIR MÈTODES COM .map() I .join().
export function renderVideogames(videogames: Videogame[]): void {
  const videogamesCatalogue = document.getElementById("catalogue"); //Seleccionar contenidor al HTML

  if (!videogamesCatalogue) return;

  const generateHTML = videogames
    .map((videogame) => {
      //convertir array d'objectes en bloc d'HTML
      return `
      <li class="game-card">
      <div class="game-card-info">
      <h3 class="game-card-name">${videogame.title}</h3>
        <p class="game-card-genre">${videogame.genre}</p>
        <p class="game-card-platform">${videogame.platform}</p>
        <p class="game-card-rating">Rating: ${videogame.rating}</p>
        <p class="game-card-year">Release year: ${videogame.year}</p>
         <button type="button" data-id="${videogame.id}" class="btn btn-primary btn-games">Delete</button>
       </div>
        <img src="${videogame.cover}"
         class="game-card-photo"/>
    </li>`;
    })
    .join(""); //Per unir tots els elementos d'un array i convertir-los en una única cadena de text (string).

  //Injectar-lo
  videogamesCatalogue.innerHTML = generateHTML;
}

//EL TOP 3 VIDEOJOCS
export function renderTop3(videogames: Videogame[]): void {
  const podium = top3Videogames(videogames); //cridar a la funció de orderTop3 passant-li els jocs per guardar el resultat (el podi dels 3 jocs) en una variable.

  if (!podium) return;

  const top3List: HTMLElement | null =
    document.getElementById("top-games-list"); //Seleccionar contenidor al HTML

  if (!top3List) return;

  const generateHTML = podium //convertir array d'objectes ja ordenat i tallat en bloc d'HTML
    .map((videogame, index) => {
      return ` 
      <p class="top3">Top ${index + 1}</p>  
      <li class="game-card">
      <div class="game-card-info">
      <h3 class="game-card-name">${videogame.title}</h3>
        <p class="game-card-genre">${videogame.genre}</p>
        <p class="game-card-platform">${videogame.platform}</p>
        <p class="game-card-rating"> Rating: ${videogame.rating}</p>
        <p class="game-card-year">Release year: ${videogame.year}</p>
        </div>
        <img src="${videogame.cover}"
         class="game-card-photo"/>
    </li>`; //Posar data-id al button de delete perquè després, quan fem click en aquest botó, puguem identificar quin joc és i eliminar-lo del catàleg.
    })
    .join(""); //Per unir tots els elements d'un array i convertir-los en una única cadena de text (string).

  //Injectar-lo
  top3List.innerHTML = generateHTML;
}
