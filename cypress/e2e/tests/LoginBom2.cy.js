/// <reference types="cypress"/>
import { LoginPage } from "../pages/LoginPage";

describe("connection to the cypress BOM2.0 page", () => {
// this part permi
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
    cy.get("#username").type("auto_webagent")
      cy.get("#password").type("Smobil@2023")
      cy.get(".MuiGrid-container > :nth-child(3)").click()
      cy.wait(500)
  })
    it("preview of the home page after login", () => {
      
        cy.get(".css-1ni7kpp > :nth-child(1)").contains("WELCOME TO YOUR")
        cy.get(".MuiTypography-h2").contains("DIGITAL PAYMENT")
        cy.get(".css-1ni7kpp > :nth-child(3").contains("PLATFORM")
        cy.get(".MuiTypography-root").contains("Bulk Payment")
    })
      it("menu that contains components on the left side", () => {
        cy.get(' .MuiListItemText-root').eq(0).should('exist')
        // cy.get(".MuiListItemText-root").eq(0).within(() => {
        // })
          cy.get('[data-testid="storemenu-item"]').contains("Stores")
          cy.get('[data-testid="collection-settings-menu-item"]').contains("Settings")
        cy.get(' .MuiListItemText-root').eq(1)
          cy.get('[data-testid="transaction_history-menu-item"]').contains("Transaction History")
          cy.get('[data-testid="payment_request-history-menu-item"]').contains("Request History")

        cy.get(' .MuiListItemText-root').eq(2)
          cy.get('[data-testid="bulk_payment-menu-item"]').contains("Bulk Payment")
        cy.get(' .MuiListItemText-root').eq(3)
          cy.get('[data-testid="remittance_send-menu-item"]').contains("Send")
          cy.get('[data-testid="remittance_history-menu-item"]').contains("History")
          cy.get('[data-testid="remittance_reports-menu-item"]').contains("Reports")
        cy.get(' .MuiListItemText-root').eq(4)
          cy.get('[data-testid="agent_payments_home-menu-item"]').contains("Billers and services")
          cy.get('[data-testid="agent_payments_history-menu-item"]').contains("History")
        cy.get(' .MuiListItemText-root').eq(5)
          cy.get('[data-testid="self-topup-fund-account-menu-item"]').contains("Fund Account")
          cy.get('[data-testid="self-topup-configuration-menu-item"]').contains("Configurations")
    })
   

})


