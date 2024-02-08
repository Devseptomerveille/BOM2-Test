
describe("connection to the cypress BOM2.0 page", () =>{

    beforeEach( () =>{
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
      })
      it("click on history in the side menu bar of distribution", () =>{
        cy.getByData("agent_payments_history-menu-item").find("a").contains("Get started").click()
      })
    })