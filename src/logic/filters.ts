import type { Videogame } from "../types/videogame";

//Definir l'estructura dels filtres que utilitzarem
export interface GameFilters {
  search: string;
  genre: string;
  platform: string;
}

//FUNCIÓ PURA: Rep tots els jocs i els filtres actius, i en torna un array nou filtrat
export function filterGames(
  videogames: Videogame[],
  filters: GameFilters,
): Videogame[] {
  // Netejar els textos: passem a minúscules i eliminem espais buits als costats (.trim)
  const searchTerm = filters.search.toLowerCase().trim();
  const genre = filters.genre.toLowerCase().trim();
  const platform = filters.platform.toLowerCase().trim();

  // Recórrer l'array de jocs i comprovar quins compleixen les condicions
  return videogames.filter((videogame) => {
    // Convertir números a text per poder utilitzar el mètode .includes()
    let yearText = videogame.year.toString();
    let ratingText = videogame.rating.toString();

    // FILTRE 1 (Cercador general): Si està buit, passa. Si té text, busca coincidència a qualsevol camp
    const matchesSearch =
      !searchTerm ||
      videogame.title.toLowerCase().includes(searchTerm) ||
      videogame.genre.toLowerCase().includes(searchTerm) ||
      videogame.platform.toLowerCase().includes(searchTerm) ||
      yearText.includes(searchTerm) ||
      ratingText.includes(searchTerm);

    // FILTRE 2 (Desplegable gènere): Si està buit, passa. Si té text, la comparació ha de ser exacta
    const matchesGenre =
      !genre || videogame.genre.toLowerCase() === genre.toLowerCase();

    // FILTRE 3 (Desplegable plataforma): Si està buit, passa. Si té text, la comparació ha de ser exacta
    const matchesPlatform =
      !platform || videogame.platform.toLowerCase() === platform.toLowerCase();

    // Retorna 'true' només si el videojoc compleix els 3 filtres alhora (acumulatiu)
    return matchesSearch && matchesGenre && matchesPlatform;
  });
}
