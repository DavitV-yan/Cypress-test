import { currancyType } from "./homePage";
const URL = "http://spv2-stage.betcoapps.com/";
const signInButton =
  "#root > div.Popup-fullPagePopupWrapperStyles-0-2-49.Popup-fullPagePopupWrapperStyles-d8-0-2-73 > div.popupContainerStyles > div.Popup-popupChildrenStyles-0-2-51.Popup-popupChildrenStyles-d9-0-2-74 > div > form > button > div";
const logOutTitle = '[data-testid="logout"]';
const errorMessage = '#root > div.Popup-fullPagePopupWrapperStyles-0-2-35.Popup-fullPagePopupWrapperStyles-d8-0-2-59 > div.popupContainerStyles > div.Popup-popupChildrenStyles-0-2-37.Popup-popupChildrenStyles-d9-0-2-60 > div > form > div:nth-child(1) > div.Input-fieldMessageStyles-0-2-426.Input-fieldErrorMessageStyles-0-2-430 > p';


class LogInPage {
  clickOnSigninButton() {
    const button = cy.get(signInButton);
    button.click();
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

//     getPasswordError() {
//       return cy.get(`[data-testid=SignInPasswordError]`);
//     }

//     fillEmail(value) {
//       const field = cy.get(`[data-testid=SignInEmailField]`);
//       field.clear();
//       field.type(value);

//       return this;
//     }

//     fillPassword(value) {
//       const field = cy.get(`[data-testid=SignInPasswordField]`);
//       field.clear();
//       field.type(value);

//       return this;
//     }

//     submit() {
//       const button = cy.get(`[data-testid=SignInSubmitButton]`);
//       button.click();
//     }
//   }

export default LogInPage;
