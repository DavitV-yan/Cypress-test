/// <reference types="cypress" />
import LogInPage from "../pages/logInPage";
import HomePage, { currancyType } from "../pages/homePage";
import { beforee, beforeEachh } from "./base-test";
const homePage = new HomePage();
const logInPage = new LogInPage();

before(beforee);
beforeEach(beforeEachh);

describe("Check error messages", () => {
  it("Check log in pop-up error messages", () => {
    homePage.clickOnLoginButton();
    logInPage.clickOnSigninButton();
    cy.get('#root > div.Popup-fullPagePopupWrapperStyles-0-2-35.Popup-fullPagePopupWrapperStyles-d8-0-2-59 > div.popupContainerStyles > div.Popup-popupChildrenStyles-0-2-37.Popup-popupChildrenStyles-d9-0-2-60 > div > form > div:nth-child(1) > div.Input-fieldMessageStyles-0-2-426.Input-fieldErrorMessageStyles-0-2-430 > p').should("contain.text", "This field is required");
    cy.get(
      "#root > div.Popup-fullPagePopupWrapperStyles-0-2-48.Popup-fullPagePopupWrapperStyles-d8-0-2-68 > div.popupContainerStyles > div.Popup-popupChildrenStyles-0-2-50.Popup-popupChildrenStyles-d9-0-2-69 > div > form > div:nth-child(2)"
    ).should("contain.text", "This field is required");
  });

  it("Check registration first pop-up error messages", () => {
    cy.contains("Login").click();
    cy.contains("Sign up").click();
    cy.contains("Next").click();
    cy.get("div")
      .contains("This field is required")
      .should("contain.text", "This field is required");
    cy.get("#email").type("h");
    cy.get("div").contains("Too short").should("contain.text", "Too short");
    cy.get("[data-testid=password]").type("test");
    cy.get("div")
      .contains("Password should contain at least 8 characters")
      .should("contain.text", "Password should contain at least 8 characters");
    cy.get("#confirmPassword").type("t");
    cy.get("div")
      .contains("Passwords does not match")
      .should("contain.text", "Passwords does not match");
  });

  it("Check registration second pop-up error messages", () => {
    cy.contains("Login").click();
    cy.contains("Sign up").click();
    cy.get("#email").type("h@gmail.com");
    cy.get("[data-testid=password]").type("test1234");
    cy.get("#confirmPassword").type("test1234");
    cy.contains("Next").click();
  });
});
