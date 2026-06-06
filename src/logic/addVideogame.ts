import type { Videogame } from "../types/videogame";

// Una funció (primer exportar-la) que rebi l'array original de videojocs i el nou videojoc a afegir
export function addVideogames(
  videogames: Videogame[],
  newVideogame: Videogame,
): Videogame[] {
  //Assegurar-nos que no hi hagi dos videojocs amb mateix títol (la funció some() retorna true si algun element de l'array compleix la condició que li passem)
  const videogameExists = videogames.some(
    (videogame) =>
      videogame.title.toLowerCase() === newVideogame.title.toLowerCase(),
  );

  if (videogameExists) {
    return videogames; // Retornar l'array original si hi ha duplicats
  }

  //Retornar un nou array amb ...els videojocs que ja tenim + aquell videojoc (operator spread)
  const updatedVideogames = [...videogames, newVideogame];

  return updatedVideogames;
}
