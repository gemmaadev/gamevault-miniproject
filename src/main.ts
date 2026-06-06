// ==========================================
// IMPORTACIONS (Portem les nostres eines)
// ==========================================

// Importem l'array de jocs inicial (Mock) i les funcions que modifiquen les dades
import { videogameMock } from "./data/videogame.mock";
import { deleteVideogames } from "./logic/deleteVideogame";
import { addVideogames } from "./logic/addVideogame";
import { filterGames } from "./logic/filters";

// Importem les funcions que dibuixen l'HTML a la pantalla
import { renderTop3, renderVideogames } from "./logic/render";

// ==========================================
// ESTAT GLOBAL I SELECTORS DE LA PANTALLA
// ==========================================

// Variable mutable que guarda la llista de jocs activa en memòria RAM
let currentGames = videogameMock;

// Busquem els inputs i desplegables de la pantalla per poder llegir-los després
const searchInput = document.getElementById("games-search") as HTMLInputElement;
const genreSelect = document.getElementById("genre-filter") as HTMLSelectElement;
const platformSelect = document.getElementById("platform-filter") as HTMLSelectElement;

// ==========================================
// CERVELL DE L'APLICACIÓ (updateUI)
// ==========================================

// FUNCIÓ CENTRAL: S'encarrega d'agafar els filtres actius, filtrar els jocs i refrescar la pantalla
function updateUI(): void {
  // 1. Cridem a la funció de filtrar passant-li els jocs actuals i els valors dels inputs en aquest segon
  const filtered = filterGames(currentGames, {
    search: searchInput?.value ?? "",   // Si l'input no existeix (?), pas d'emergència a text buit ("")
    genre: genreSelect?.value ?? "",     // Si el desplegable no existeix, pas de seguretat a ""
    platform: platformSelect?.value ?? "", // Si el desplegable no existeix, pas de seguretat a ""
  });

  // 2. Enviem la llista ja filtrada al pintor per dibuixar només els jocs que han passat el filtre
  renderVideogames(filtered);
}

// ==========================================
// ARRENQUEDA INICIAL (Quan s'obre la web)
// ==========================================

updateUI();               // Executem la funció central per pintar els jocs per primera vegada
renderTop3(currentGames); // Calculem i pintem el podi del Top 3 global

// ==========================================
// ACCIONS DE L'USUARI (EventListeners)
// ==========================================

// --- A: ESBORRAR UN VIDEOJOC (DELETE) ---

// Seleccionem la llista 'ul' on estan col·locats tots els jocs
const catalogueContainer = document.getElementById("catalogue");

if (catalogueContainer) {
  // Escoltem els clics de tot el catàleg (Delegació d'esdeveniments)
  catalogueContainer.addEventListener("click", (event: MouseEvent) => {
    // Guardem l'element exacte que ha rebut el clic de l'usuari (el ratolí)
    const clickedElement = event.target as HTMLElement;

    // Comprovem si el que s'ha clicat és realment el botó d'esborrar (té la classe 'btn-games')
    if (clickedElement.classList.contains("btn-games")) {
      const videogameId = clickedElement.dataset.id; // Llegim l'atribut 'data-id' de l'HTML

      // 1. Modifiquem la llista de la memòria generant un array nou sense el joc esborrat
      currentGames = deleteVideogames(currentGames, Number(videogameId));

      // 2. Cridem al cervell perquè torni a mirar els filtres de la pantalla i refresqui el catàleg
      updateUI();
      
      // 3. Tornem a calcular el Top 3 perquè si hem esborrat un joc del podi, s'ha d'actualitzar
      renderTop3(currentGames);
    }
  });
}

// --- B: AFEGIR UN NOU VIDEOJOC (ADD FORM) ---

// Seleccionem el formulari de la pantalla
const formsContainer = document.getElementById("add-game-form") as HTMLFormElement;

if (formsContainer) {
  // Escoltem quan l'usuari prem el botó d'enviar el formulari (submit)
  formsContainer.addEventListener("submit", function (event: SubmitEvent) {
    
    event.preventDefault(); // OBLIGATORI: Frena el navegador a l'instant perquè no es refresqui la pàgina ni canviï la URL

    // Creem l'objecte del nou joc llegint el contingut escrit a cada input de l'HTML
    const newVideogame = {
      id: Date.now(), // Generem una ID única automatitzada fent servir el temps en mil·lisegons
      title: (document.getElementById("new-game") as HTMLInputElement).value,
      genre: (document.getElementById("genre") as HTMLInputElement).value,
      platform: (document.getElementById("platform") as HTMLInputElement).value,
      rating: Number((document.getElementById("rating") as HTMLInputElement).value),
      year: Number((document.getElementById("release-year") as HTMLInputElement).value),
      cover: (document.getElementById("game-image") as HTMLInputElement).value,
    };

    // 1. Modifiquem la llista de la memòria afegint aquest nou objecte a dalt o a baix
    currentGames = addVideogames(currentGames, newVideogame);

    // 2. Netegem i buidem automàticament totes les caixes de text del formulari
    formsContainer.reset();

    // 3. Cridem al cervell perquè la pantalla es refresqui respectant el filtre que l'usuari tingui posat
    updateUI();
    
    // 4. Actualitzem el Top 3 per si el nou joc té una nota tan alta que es mereix entrar al podi
    renderTop3(currentGames);
  });
}

// --- C: INTERACTUAR AMB ELS FILTRES (INPUT / CHANGE) ---

// Escoltem quan l'usuari escriu al cercador, canvia el gènere o canvia la plataforma.
// Qualsevol d'aquestes 3 accions activarà automàticament el cervell (updateUI) per re-filtrar la llista.
searchInput?.addEventListener("input", updateUI);
genreSelect?.addEventListener("change", updateUI);
platformSelect?.addEventListener("change", updateUI);