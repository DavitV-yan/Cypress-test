import { currancyType } from "./homePage";
const URL = "";
const signInButton = 'sign_in'
const logOutTitle = '[data-testid="logout"]';
const errorMessage = '#root > div.Popup-fullPagePopupWrapperStyles-0-2-35.Popup-fullPagePopupWrapperStyles-d8-0-2-59 > div.popupContainerStyles > div.Popup-popupChildrenStyles-0-2-37.Popup-popupChildrenStyles-d9-0-2-60 > div > form > div:nth-child(1) > div.Input-fieldMessageStyles-0-2-426.Input-fieldErrorMessageStyles-0-2-430 > p';


class LogInPage {
  clickOnSigninButton() {
    cy.get(signInButton).click();
  }

  fillEmail(value) {
    const field = cy.get("[name=userName]");
    field.type(value);
    return this;
  }

  fillPassword(value) {
    const field = cy.get("[name=password]");
    field.clear();
    field.type(value);
    return this;
  }

  submit() {
    cy.get("button[type=submit]").click();
  }
  clickOnCurrancy() {
    cy.get(currancyType).click();
  }

  clickOnLogOut() {
    cy.get(logOutTitle).click();
  }
}
