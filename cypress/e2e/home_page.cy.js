/* eslint-disable no-undef */
describe("Page d'accueil, test des inputs, ajout d'un livre, suppresion d'un livre et de tous les livres", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // Fct permettant d'ajouter un livre, on repéte l'opération pour simuler les clicks (delete & deleteAll)
  const addNewBook = () => {
    cy.get('input[placeholder="Titre du livre"]').type("My New Book");
    cy.get('input[placeholder="Auteur du livre"]').type("Jane Doe");
    cy.get("[data-add-book]").click();
    cy.contains("My New Book");
    cy.contains("Jane Doe");
  };

  it("Ajout d'un livre", () => {
    addNewBook();
  });

  it("Supression d'un livre", () => {
    addNewBook();
    cy.get("[data-delete-book]").click();
    cy.contains("Il n'y a aucun livre dans la collection");
  });

  it("Supression des livres", () => {
    addNewBook();
    cy.get("[data-delete-allbook]").click();
    cy.contains("Il n'y a aucun livre dans la collection");
  });
});
