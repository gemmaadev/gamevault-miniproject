import type { Videogame } from "../types/videogame";

//PAS 3 PER RENDERITZAR CONTINGUT DINÀMIC:
// RECORRER ARRAY PER INJECTAR DINÀMICAMENT EL CODI HTML AL DOM FENT SERVIR MÈTODES COM .map() I .join().
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
        <p class="game-card-rating">${videogame.rating}</p>
        <p class="game-card-year">${videogame.year}</p>
         <button type="button" class="btn btn-primary btn-games">Delete</button>
       </div>
        <img src="/img/example.jpg"
         class="game-card-photo"/>
    </li>`;
    })
    .join("");

  //Injectar-lo
  videogamesCatalogue.innerHTML = generateHTML;
}
