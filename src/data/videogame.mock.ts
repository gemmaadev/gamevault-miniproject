import type { Videogame } from "../types/videogame";

//PAS 2 PER RENDERITZAR CONTINGUT DINÀMIC: CREAR UN ARRAY D'OBEJCTES SIMULATS (MOCK DATA)

export const VideogameMock: Videogame[] = [
  {
    id: 1,
    title: "Stardew Valley",
    genre: "Farming Simulation",
    platform: "Multiplatform",
    rating: 9.5,
    year: 2016,
    cover: "/stardew-valley.webp"
  },
  {
    id: 2,
    title: "Life is Strange",
    genre: "Graphic Adventure",
    platform: "Multiplatform",
    rating: 9.7,
    year: 2015,
    cover: "/life-is-strange.webp"
  },
  {
    id: 3,
    title: "Until Dawn",
    genre: "Survival Horror",
    platform: "PlayStation",
    rating: 9,
    year: 2015,
    cover: "/until-dawn.webp"
  },
  {
    id: 4,
    title: "The Sims 3",
    genre: "Life Simulation",
    platform: "PC",
    rating: 8,
    year: 2009,
    cover: "/the-sims-3.webp"
  },
  {
    id: 5,
    title: "Animal Crossing: New Horizons",
    genre: "Life Simulation",
    platform: "Nintendo Switch",
    rating: 8.5,
    year: 2020,
    cover: "/animal-crossing.webp"
  },
  {
    id: 6,
    title: "Tomb Raider",
    genre: "Action-Adventure",
    platform: "Multiplatform",
    rating: 9,
    year: 2013,
    cover: "/tomb-raider.webp"
  },
  {
    id: 7,
    title: "It Takes Two",
    genre: "Co-op Platformer",
    platform: "Multiplatform",
    rating: 9.2,
    year: 2021,
    cover: "/it-takes-two.webp"
  },
  {
    id: 8,
    title: "Split Fiction",
    genre: "Co-op Platformer",
    platform: "Multiplatform",
    rating: 9.4,
    year: 2025,
    cover: "/split-fiction.webp"
  },
];
