///<reference types="cypress"/>

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })

  Cypress.Commands.add('readJsonFile',(filePath) => {
    return cy.fixture(filePath)
  })
 