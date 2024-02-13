//from branchHistoricPage
describe("assert that the user can click history in the bar distribution side menu", () =>{
 
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
    cy.get("#username").type("auto_webagent")
      cy.get("#password").type("Smobil@2023")
      cy.get(".MuiGrid-container > :nth-child(3)").click()
        cy.get('[data-testid="agent_payments_history-menu-item"]').click()
        cy.wait(500)
  })
  
  it ("the elements contained in the table of the historical page", () =>{
   
 //cy.get('.css-1fyoe53 > .MuiToolbar-root')
  //.get('.css-1fyoe53 > .MuiToolbar-root > :nth-child(1)').click()
   //.get('.css-1fyoe53 > .MuiToolbar-root > :nth-child(2)').click()
   cy.log('** Service not sortable**').wait(500)
   cy.contains(".column-serviceTitle > .MuiButtonBase-root > span","Service").click()
   cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2) > span").contains("Destination")
   cy.log('** Collected Amount is not sortable**').wait(500)
   cy.contains(".column-totalAmount > .MuiButtonBase-root > span","Collected Amount").click()
   cy.log('** Pait At is not sortable**').wait(500)
   cy.contains(".column-timestamp > .MuiButtonBase-root > span","Paid At").click()
   cy.contains(" .MuiTableHead-root > .MuiTableRow-root > :nth-child(5)","ptn")
   cy.log('**Processed At is not sortable**').wait(500)
   cy.contains(".MuiTableHead-root > .MuiTableRow-root > .column-clearingDate","Processed At").click()
   cy.log('**Payment Status is not sortable**').wait(500)
   cy.contains(".column-status > .MuiButtonBase-root > span","Payment Status").click()
   cy.contains(".MuiTableHead-root > .MuiTableRow-root > :nth-child(8) > span","Actions")

   cy.get("#mui-21").contains('10').click()
   cy.wait(400)
   cy.get('#menu- > .MuiPaper-root > .MuiList-root > .Mui-selected').click()
        // confirm the table showing 25 rows per page
 // cy.get("#mui-21").should("have.value", '10')
        //regarding pagination
   cy.get(".MuiPagination-ul").contains('1').click()
   //cy.get(".MuiPagination-ul").contains('2').click()

  })
    })