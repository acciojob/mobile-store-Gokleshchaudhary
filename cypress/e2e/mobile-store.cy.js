describe("Online Mobile Store", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("url changes when click on products", () => {
    cy.get('a[href^="/products/"]').first().click();
    cy.url().should("include", "/products/");
  });

  it("Navigating to admin and removing products", () => {
    cy.get('a[href="/admin"]').click();
    cy.get("table tbody tr").should("have.length", 8);
    cy.get("table tbody tr")
      .first()
      .find("button.float-right")
      .contains("Delete")
      .click();
    cy.get("table tbody tr").should("have.length", 7);
  });

  it("Removes/update a product", () => {
    cy.get('a[href="/admin"]').click();
    cy.get("table tbody tr").first().find("a").click();
    cy.get(".float-right").contains("Edit").click();
    cy.get('input[name="price"]').clear().type("999");
    cy.get(".float-right").contains("Save").click();
    cy.get("h3").should("contain", "$999");
  });
});
