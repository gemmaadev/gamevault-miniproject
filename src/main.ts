// 1. Importar array de dades (Mock)
import { VideogameMock } from "./data/videogame.mock"; 

// 2. Importar la funció creada a render.ts
import { renderVideogames } from "./logic/render"; 

// 3. EXECUTAR la funció pasant-li el catàleg de jocs per carregar-los a la pantalla
renderVideogames(VideogameMock);