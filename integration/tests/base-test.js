const URL = "";
export const userEmail = "utest202101@gmail.com";
export const userPass = "Test12345";

export const beforee = () => {
  cy.visit(URL);
};

export const beforeEachh = () => {
  cy.viewport(420, 625);
  cy.wait(200);
};
