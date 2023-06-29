/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("It should login when user and password matches", () => {
    cy.get("[data-test=signin-username]").type("Katharina_Bernier");
    cy.get("[data-test=signin-password]").type("s3cret");
    cy.get("[data-test=signin-submit]").click();

    cy.get("[data-test=sidenav]").should("contain", "@Katharina_Bernier");
  });

  it("It should not login when user and password does not matches", () => {
    cy.get("[data-test=signin-username]").type("Katharina_Bernier");
    cy.get("[data-test=signin-password]").type("dfkjfkfjdkjt");
    cy.get("[data-test=signin-submit]").click();

    cy.get("[data-test=signin-error]").should("contain", "Username or password is invalid");
  });
});
