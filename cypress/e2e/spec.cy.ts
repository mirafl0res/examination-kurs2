/// <reference types="cypress" />

describe("recipe app test", () => {
  it("searches for, reads and toggles favorite recipes(mock)", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".navbar").should("be.visible");
    cy.get(".logo").should("contain.text", "Recipe finder");

    cy.get("#search-ingredient-btn").should("be.visible").click();

    cy.get("#searchField").should("be.visible").type("pasta");
    cy.get("#filters-btn").should("be.visible").click();
    cy.get("#filters-intolerances-btn").should("be.visible").click();
    cy.get(".pill-group").should("be.visible").contains("Egg").click();
    cy.get("#filters-diets-btn").should("be.visible").click();
    cy.get(".pill-group").should("be.visible").contains("vegetarian").click();

    cy.get("#filters-extras-btn").should("be.visible").click();
    cy.get(".dropdown-container")
      .should("be.visible")
      .contains("label", /Max time/)
      .find("select")
      .should("be.visible")
      .select("45")
      .should("have.value", "45");

    cy.get("#search-add-btn").click();
    cy.get(".search-ingredients-btn").click();

    cy.get(".recipe-card").eq(0).should("be.visible").click();
    cy.url().should("include", "/recipe");
    cy.get("article").find("h1").should("be.visible");
    cy.get(".favorite-btn").should("be.visible").click();

    cy.get(".nav-menu-btn").should("be.visible").click();
    cy.get("a").contains("Favorite Recipes").click();

    cy.url().should("include", "/favorites");
    cy.get(".recipe-card").eq(0).should("be.visible").click();
    cy.url().should("include", "/recipe");
    cy.get(".favorite-btn").should("be.enabled").click();

    cy.get(".back-button").should("be.visible").click();
    cy.url().should("include", "/favorites");
    cy.get("p").should("be.visible").contains("No favorites yet");
  });
});
