/// <reference types="cypress"/>
import { LoginPage } from "../pages/LoginPage";

describe("connection to the cypress BOM2.0 page", () =>{

    beforeEach( () =>{
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
      })
    it("precondition: login", () =>{
      cy.get("#username").type("auto_webagent")
      cy.get("#password").type("Smobil@2023")
      cy.get(".MuiGrid-container > :nth-child(3)").click()
      cy.get(".css-1ni7kpp > :nth-child(1)").contains("WELCOME TO YOUR")
      cy.get(".MuiTypography-h2").contains("DIGITAL PAYMENT")
      cy.get(".css-1ni7kpp > :nth-child(3").contains("PLATFORM")
    })
})


