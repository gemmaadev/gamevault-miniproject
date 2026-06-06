Feature: Filter videogame

  Background:
    Given there are videogames in our game vaut

  Scenario: Search by title
    When the user types "stardew valley" in the search field
    Then only videogame with "stardew" in the title is shown