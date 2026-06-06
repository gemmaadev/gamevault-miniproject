// ==========================================
// BLOC 1: IMPORTACIONS
// ==========================================
import { fetchVideogamesAPI } from "./services/api";
import { deleteVideogames } from "./logic/deleteVideogame";
import { addVideogames } from "./logic/addVideogame";
import { filterGames } from "./logic/filters";
import { renderTop3, renderVideogames } from "./logic/render";
import type { Videogame } from "./types/videogame";

// ==========================================
// BLOC 2: ESTAT GLOBAL I SELECTORS DE LA PANTALLA
// ==========================================
let currentGames: Videogame[] = [];

// Selectors de filtres i del catàleg (tots junts a dalt de tot)
const catalogueContainer = document.getElementById("catalogue");
const searchInput = document.getElementById("games-search") as HTMLInputElement;
const genreSelect = document.getElementById(
  "genre-filter",
) as HTMLSelectElement;
const platformSelect = document.getElementById(
  "platform-filter",
) as HTMLSelectElement;

// ==========================================
// BLOC 3: CERVELL DE L'APLICACIÓ (updateUI)
// ==========================================
function updateUI(): void {
  const filtered = filterGames(currentGames, {
    search: searchInput?.value ?? "",
    genre: genreSelect?.value ?? "",
    platform: platformSelect?.value ?? "",
  });

  renderVideogames(filtered);
}

// ==========================================
// BLOC 4: ARRENCADA ASÍNCRONA (GESTIÓ D'ESTATS)
// ==========================================
async function initApplication() {
  if (!catalogueContainer) return;

  try {
    // 1. LOADING
    catalogueContainer.innerHTML = `<p>Loading videogames...</p>`;

    // 2. SUCCESS: Esperem les dades de la simulació d'API
    currentGames = await fetchVideogamesAPI();

    catalogueContainer.innerHTML = "";
    updateUI();
    renderTop3(currentGames);
  } catch (error) {
    // 3. ERROR: Si falla la promesa, text net sense botons
    catalogueContainer.innerHTML = `<p>Couldn't load your videogames. Please refresh the page.</p>`;
  }
}

// Inicialitzem el projecte
initApplication();

// ==========================================
// BLOC 5: ACCIONS DE L'USUARI (EventListeners)
// ==========================================

// --- A: ESBORRAR UN VIDEOJOC (DELETE) ---
if (catalogueContainer) {
  catalogueContainer.addEventListener("click", (event: MouseEvent) => {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.classList.contains("btn-games")) {
      const videogameId = clickedElement.dataset.id;

      currentGames = deleteVideogames(currentGames, Number(videogameId));
      updateUI();
      renderTop3(currentGames);
    }
  });
}

// --- B: AFEGIR UN NOU VIDEOJOC (ADD FORM) ---
const formsContainer = document.getElementById(
  "add-game-form",
) as HTMLFormElement;

if (formsContainer) {
  formsContainer.addEventListener("submit", function (event: SubmitEvent) {
    event.preventDefault();

    const newVideogame = {
      id: Date.now(),
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

    currentGames = addVideogames(currentGames, newVideogame);
    formsContainer.reset();

    updateUI();
    renderTop3(currentGames);
  });
}

// --- C: INTERACTUAR AMB ELS FILTRES ---
searchInput?.addEventListener("input", updateUI);
genreSelect?.addEventListener("change", updateUI);
platformSelect?.addEventListener("change", updateUI);
