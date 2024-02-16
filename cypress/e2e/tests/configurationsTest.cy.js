describe("assert that the user can click configurations in the bar distribution side menu", () =>{
    beforeEach(() => {
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
        cy.get("#username").type("auto_webagent")
        cy.get("#password").type("Smobil@2023")
          cy.get(".MuiGrid-container > :nth-child(3)").click()
            cy.get('[data-testid="agent_payments_history-menu-item"]').click()
            cy.wait(500)
      })
it()
})