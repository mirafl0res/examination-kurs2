/// <reference types="cypress" />

const TEST_INGREDIENT = "pasta";
const TEST_INTOLERANCE = "Egg";
const TEST_DIET = "vegetarian";
const TEST_MAX_TIME = "45";

describe("Recipe App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  describe("Navigation", () => {
    it("should display navbar with logo", () => {
      cy.get(".navbar").should("be.visible");
      cy.get(".logo").should("contain.text", "Recipe finder");
    });
  });

  describe("Search functionality", () => {
    it("should allow searching with filters", () => {
      cy.get("#search-ingredient-btn").click();
      cy.get("#searchField").type(TEST_INGREDIENT);

      cy.get("#filters-btn").click();
      cy.get("#filters-intolerances-btn").click();
      cy.get(".pill-group").contains(TEST_INTOLERANCE).click();

      cy.get("#filters-diets-btn").click();
      cy.get(".pill-group").contains(TEST_DIET).click();

      cy.get("#filters-extras-btn").click();
      cy.get(".dropdown-container")
        .contains("label", /Max time/)
        .find("select")
        .select(TEST_MAX_TIME)
        .should("have.value", TEST_MAX_TIME);

      cy.get("#search-add-btn").click();
      cy.get(".search-ingredients-btn").click();

      cy.get(".recipe-card").should("exist");
    });
  });

  describe("Recipe details", () => {
    beforeEach(() => {
      cy.get("#search-ingredient-btn").click();
      cy.get("#searchField").type(TEST_INGREDIENT);
      cy.get("#search-add-btn").click();
      cy.get(".search-ingredients-btn").click();
    });

    it("should navigate to recipe details page", () => {
      cy.get(".recipe-card").eq(0).click();
      cy.url().should("include", "/recipe");
      cy.get("article h1").should("be.visible");
    });
  });

  describe("Favorites", () => {
    beforeEach(() => {
      cy.get("#search-ingredient-btn").click();
      cy.get("#searchField").type(TEST_INGREDIENT);
      cy.get("#search-add-btn").click();
      cy.get(".search-ingredients-btn").click();
      cy.get(".recipe-card").eq(0).click();
    });

    it("should add recipe to favorites", () => {
      cy.get(".favorite-btn").click();

      cy.get(".nav-menu-btn").click();
      cy.contains("a", "Favorite Recipes").click();

      cy.url().should("include", "/favorites");
      cy.get(".recipe-card").should("exist");
    });

    it("should remove recipe from favorites", () => {
      cy.get(".favorite-btn").click();
      cy.get(".nav-menu-btn").click();
      cy.contains("a", "Favorite Recipes").click();

      cy.get(".recipe-card").eq(0).click();
      cy.get(".favorite-btn").click();

      cy.get(".back-button").click();
      cy.url().should("include", "/favorites");
      cy.contains("p", "No favorites yet").should("be.visible");
    });
  });
});
