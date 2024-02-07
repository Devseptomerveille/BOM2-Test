//from branchHistoricPage
describe("connection to the cypress BOM2.0 page", () =>{

    
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
    cy.get("#username").type("auto_webagent")
      cy.get("#password").type("Smobil@2023")
      cy.get(".MuiGrid-container > :nth-child(3)").click()
      cy.wait(500)
  })
  it ("from brancheHistoricPage", () =>{

  })
    })