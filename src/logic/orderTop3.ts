import type { Videogame } from "../types/videogame";

// Una funció (primer exportar-la) que rebi l'array original de videojocs,
export function top3Videogames(videogames: Videogame[]): Videogame[] {
  //ordenar per nota (de major a menor)
  const rankedVideogames = videogames.toSorted(
    //Amb el toSorted no afectem l'array original
    (videogame1, videogame2) => videogame2.rating - videogame1.rating,
  );
  console.log(rankedVideogames);

  //tallar array per quedar-me amb els 3 primers
  const top3result = rankedVideogames.slice(0, 3);

  //return per tornar aquest nou array de 3 jocs guanyadors
  return top3result;
}
