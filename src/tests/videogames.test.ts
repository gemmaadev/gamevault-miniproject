import { describe, it, expect } from "vitest";
import { filterGames } from "../logic/filters";
import { mockVideogames } from "./mocks/videogames.mock";

describe("filterVideogames", () => {
  // Scenario: Search by title
  it("should return only videogames with 'stardew' in the title", () => {
    const result = filterGames(mockVideogames, {
      search: "Stardew Valley",
      genre: "",
      platform: "",
    });
    expect(
      result.every((videogame) =>
        videogame.title.toLowerCase().includes("stardew"),
      ),
    ).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
