describe("LRNR Homepage", () => {

  it("loads the homepage successfully", () => {
    cy.visit("http://localhost:3000")
    cy.url().should("include", "localhost:3000")
  })

  it("displays the navigation bar", () => {
    cy.visit("http://localhost:3000")
    cy.get("nav").should("exist")
  })

  it("shows the site title", () => {
    cy.visit("http://localhost:3000")
    cy.contains("LRNR")
  })

  it("has at least one button on the page", () => {
    cy.visit("http://localhost:3000")
    cy.get("button").should("exist")
  })

})