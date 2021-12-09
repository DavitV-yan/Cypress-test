/// <reference types="cypress" />
import HomePage from "../pages/homePage";
import { beforee, beforeEachh } from "./base-test";
const homePage = new HomePage();

before(beforee);
beforeEach(beforeEachh);

describe("Route tests from home page", () => {
  it("Checking Sport rout", () => {
    homePage.clickOnSportRout();
    cy.location("pathname").should("equal", "/sport/Soccer");
  });
  it("Checking Live rout", () => {
    homePage.clickOnLiveRout();
    cy.location("pathname").should("equal", "/live");
  });
  it("Checking Esport rout", () => {
    homePage.clickOnEsportRout();
    cy.location("pathname").should("equal", "/esport");
  });
  it("Checking Casino rout", () => {
    homePage.clickOnCasinoRout();
    cy.location("pathname").should("equal", "/casino");
  });
  it("Checking Live Casino rout", () => {
    homePage.clickOnLiveCasinoRout();
    cy.location("pathname").should("equal", "/live-casino");
  });
  it("Checking Games rout", () => {
    homePage.clickOnGamesRout();
    cy.location("pathname").should("equal", "/games");
  });
  it("Checking Promotion rout", () => {
    homePage.clickOnPromotionRout();
    cy.location("pathname").should("equal", "/promotions");
  });
  it("Checking Virtual sports rout", () => {
    homePage.clickOnVirtualSportsRout();
    cy.location("pathname").should("equal", "/virtual-sports/1");
  });
});
