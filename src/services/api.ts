import { videogameMock } from "../data/videogame.mock";
import type { Videogame } from "../types/videogame";

/**
 * Funció que simula una trucada a una API d'Internet.
 * Retorna una Promesa amb la llista de videojocs després d'1,5 segons.
 */
export function fetchVideogamesAPI(forceError = false): Promise<Videogame[]> {
  return new Promise((resolve, reject) => {
    // Simulem el retard de la xarxa (Wi-Fi lenta) amb un setTimeout
    setTimeout(() => {
      if (forceError) {
        // Si li passem true, la promesa es trenca (simulem caiguda del servidor)
        reject(new Error("Couldn't load videogames"));
      } else {
        // Si no li passem res (o és false), tot va bé i enviem les dades
        resolve(videogameMock);
      }
    }, 1500); // 1500 mil·lisegons = 1,5 segons
  });
}


//Això és com fabricar un fetch a mà, ja que no tenim un servidor real.

// import type { Videogame } from "../types/videogame";

// // Afegim 'async' perquè ara farem servir un 'fetch' real a dins
// export async function fetchVideogamesAPI(): Promise<Videogame[]> {
//   try {
//     // 1. Fem la crida FETCH de veritat a una URL d'Internet (el servidor)
//     const response = await fetch("https://api.meusvideojocs.com/v1/games");

//     // Si el servidor respon amb un error (ex: 404 o 500), llencem un error per activar el 'catch'
//     if (!response.ok) {
//       throw new Error("Error en la resposta del servidor");
//     }

//     // 2. Convertim la resposta que ve d'Internet en un array de JavaScript/TypeScript
//     const data: Videogame[] = await response.json();

//     // 3. Retornem els jocs reals del servidor
//     return data;

//   } catch (error) {
//     // Si la Wi-Fi es talla o el servidor cau, el fetch peta i salta aquí
//     throw new Error("No s'ha pogut connectar amb el servidor real");
//   }
// }