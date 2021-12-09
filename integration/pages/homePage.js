const sportRout = "#root > div > div > nav > a:nth-child(1)";
const liveRout = "#root > div > div > nav > a:nth-child(2)";
const esportsRout = "#root > div > div > nav > a:nth-child(3)";
const casinoRout = "#root > div > div > nav > a:nth-child(4)";
const liveCasinoRout = "#root > div > div > nav > a:nth-child(5)";
const gamesRout = "#root > div > div > nav > a:nth-child(6)";
const promotionRout = "#root > div > div > nav > a:nth-child(7)";
const virtualSportsRout = "#root > div > div > nav > a:nth-child(8)";
export const currancyType = "[data-testid='balance-currency']";
export const logInButton =
  "#root > div > div > header > div.Header-rightSideStyles-0-2-9.Header-leftAndRightSides-0-2-4 > button";

class HomePage {
  clickOnSportRout() {
    cy.get(sportRout).click();
  }
  clickOnLiveRout() {
    cy.get(liveRout).click();
  }
  clickOnEsportRout() {
    cy.get(esportsRout).click();
  }
  clickOnCasinoRout() {
    cy.get(casinoRout).click();
  }
  clickOnLiveCasinoRout() {
    cy.get(liveCasinoRout).click();
  }
  clickOnGamesRout() {
    cy.get(gamesRout).click();
  }
  clickOnPromotionRout() {
    cy.get(promotionRout).click();
  }
  clickOnVirtualSportsRout() {
    cy.get(virtualSportsRout).click();
  }
  clickOnLoginButton() {
    cy.get(logInButton).click();
  }
}

export default HomePage;
