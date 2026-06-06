//PAS 1 PER RENDERITZAR CONTINGUT DINÀMIC: DEFINIR ESTRUCTURA DE DADES MITJANÇANT INTERFACE
export interface Videogame {
  id: number;
  title: string;
  genre: string;
  platform: string;
  rating: number;
  year: number;
  cover?: string;
}
