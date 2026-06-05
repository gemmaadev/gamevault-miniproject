import type { Videogame } from "../types/videogame";

// Una funció (primer exportar-la) que rebi l'array original de videojocs,
export function deleteVideogames(
  videogames: Videogame[],
  idToDelete: number, //Rebre la id del videojoc que volem borrar
): Videogame[] {
  //Retornar un nou array sense aquell videojoc
  const updatedVideogames = videogames.filter(
    (videogame) => videogame.id !== idToDelete,
  ); //idToDelete es la id del botó escoltat pel main

  return updatedVideogames;
}
