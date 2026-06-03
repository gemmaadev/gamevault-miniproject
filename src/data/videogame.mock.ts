import type { Videogame } from "../types/videogame";

//PAS 2 PER RENDERITZAR CONTINGUT DINÀMIC: CREAR UN ARRAY D'OBEJCTES SIMULATS (MOCK DATA)

export const VideogameMock: Videogame[] = [
  {
    id: 1,
    title: "Stardew Valley",
    genre: "Farming Simulation",
    platform: "Multiplatform",
    rating: 10,
    year: 2016,
  },
  {
    id: 2,
    title: "Life is Strange",
    genre: "Graphic Adventure",
    platform: "Multiplatform",
    rating: 9,
    year: 2015,
  },
  {
    id: 3,
    title: "Until Dawn",
    genre: "Survival Horror",
    platform: "PlayStation",
    rating: 9,
    year: 2015,
  },
  {
    id: 4,
    title: "The Sims 3",
    genre: "Life Simulation",
    platform: "PC",
    rating: 9,
    year: 2009,
  },
  {
    id: 5,
    title: "Animal Crossing: New Horizons",
    genre: "Life Simulation",
    platform: "Nintendo Switch",
    rating: 10,
    year: 2020,
  },
  {
    id: 6,
    title: "Tomb Raider",
    genre: "Action-Adventure",
    platform: "Multiplatform",
    rating: 9,
    year: 2013,
  },
  {
    id: 7,
    title: "It Takes Two",
    genre: "Co-op Platformer",
    platform: "Multiplatform",
    rating: 10,
    year: 2021,
  },
  {
    id: 8,
    title: "Split Fiction",
    genre: "Co-op Platformer",
    platform: "Multiplatform",
    rating: 8.5,
    year: 2025,
  },
];
