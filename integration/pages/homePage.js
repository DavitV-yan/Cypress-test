const sportRout = "Sport";
const liveRout = "In play";
const esportsRout = "Esport";
const casinoRout = "Casino";
const liveCasinoRout = "Live Casino";
const gamesRout = "Games";
const promotionRout = "Promotions";
const virtualSportsRout = "Virtual Sports";
export const currancyType = "[data-testid='balance-currency']";
export const logInButton = "header_login";

class HomePage {
  clickOnSportRout() {
    cy.contains(sportRout).click();
  }
  clickOnLiveRout() {
    cy.contains(liveRout).click();
  }
  clickOnEsportRout() {
    cy.contains(esportsRout).click();
  }
  clickOnCasinoRout() {
    cy.contains(casinoRout).click();
  }
  clickOnLiveCasinoRout() {
    cy.contains(liveCasinoRout).click();
  }
  clickOnGamesRout() {
    cy.contains(gamesRout).click();
  }
  clickOnPromotionRout() {
    cy.contains(promotionRout).click();
  }
  clickOnVirtualSportsRout() {
    cy.contains(virtualSportsRout).click();
  }
  clickOnLoginButton() {
    cy.contains(logInButton).click();
  }
}

export default HomePage;
