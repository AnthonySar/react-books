/* eslint-disable no-undef */
describe("Test du résultat de recherche - AXIOS & API", () => {
  beforeEach(() => {
    cy.visit("/search");
  });

  it("Rechercher un livre, avec comme valeur de recherche : searchQuery = Harry Potter", () => {
    const searchQuery = "Harry potter";
    cy.get("[data-input-book]").type(searchQuery);
    cy.get("[data-search-book]").click();

    cy.get("[data-input-book]")
      .invoke("val")
      .then((searchTerm) => {
        cy.request(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
        ).then((res) => {
          console.log(res.body);
        });
      });
  });
});
