import LogInPage from '../pages/logInPage'
import HomePage, {currancyType} from "../pages/homePage";
import { userEmail, userPass } from './base-test';
import { beforee, beforeEachh } from "./base-test";
const homePage = new HomePage();
const logInPage = new LogInPage();


before(beforee);
beforeEach(beforeEachh);

describe("Log in test", () => {
  it("log in test", () => {
    homePage.clickOnLoginButton();
    logInPage.fillEmail(userEmail);
    logInPage.fillPassword(userPass);
    logInPage.clickOnSigninButton();
    cy.get(currancyType).should("text", "AMD");
    logInPage.clickOnCurrancy();
    logInPage.clickOnLogOut();

  });
});


// describe("Log in test", () => {
//   it("log in", () => {
//     login.before().beforeEach().clickOnLoginButton();
//     login.fillEmail(basetest.userEmail).fillPassword(basetest.userPass).submit();
//     cy.get(base1).should("text", "AMD");
//   });
// });
