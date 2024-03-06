//from branchHistoricPage
///<reference types="cypress"/>
//import login page field
import { LoginPage } from "../pages/LoginPage";
 

//import historicPage identifiers
import {HistoricPage} from "../pages/HistoricPage"

//import page identifiers
const loginPage = new LoginPage 
const historicPage = new HistoricPage

let testData = null;
let test_filePath = "testdata.json"

describe("assert that the user can click history in the bar distribution side menu", () =>{
  before(() => {
    cy.readJsonFile(test_filePath).then((data) => {
      testData =data
    })
  })
  
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
    cy.get(loginPage.user_name_field).type(testData.login_page.user_name_login)
      cy.get(loginPage.password_field ).type(testData.login_page.password_login)
      cy.get(loginPage.button_login_field).click()
      cy.get(historicPage.click_historic_field).click()
      cy.wait(500)
     
  })
  
  it ("the elements contained in the table of the historical page", () =>{
   
 //cy.get('.css-1fyoe53 > .MuiToolbar-root')
  //.get('.css-1fyoe53 > .MuiToolbar-root > :nth-child(1)',"EXPORT EXCEL").click()
   //.get('.css-1fyoe53 > .MuiToolbar-root > :nth-child(2)',"EXPORT CSV").click()
      cy.log('** Service not sortable**').wait(500)
      cy.contains(historicPage.click_service_ident,testData.historic_page.click_service_th).click()
      cy.get(historicPage.destination_ident).contains(testData.historic_page.destination_th)
      cy.log('** Collected Amount is not sortable**').wait(500)
      cy.contains(historicPage.click_collected_amount_ident, testData.historic_page.click_collected_amount_th).click()
      cy.log('** Pait At is not sortable**').wait(500)
      cy.contains(historicPage.click_paid_at_ident,testData.historic_page.click_paid_at_th).click()
      cy.contains (historicPage.ptn_on_table_ident,testData.historic_page.ptn_th) 
      cy.log('**Processed At is not sortable**').wait(500)
      cy.contains(historicPage.click_processed_at_ident ,testData.historic_page.click_processed_at_th).click()
      cy.log('**Payment Status is not sortable**').wait(500)
      cy.contains(historicPage.click_payment_status_ident,testData.historic_page.click_payment_Status).click()
      cy.contains(historicPage.actions_ident,testData.historic_page.actions_th)
      cy.get(historicPage.rows_per_page_ident,testData.historic_page.rows_per_page).click()
      cy.wait(400)
      cy.get(historicPage.select_rows_per_page_ident).click()
        // confirm the table showing 25 rows per page
 // cy.get("#mui-21").should("have.value", '10')
        //regarding pagination
      cy.get(historicPage.click_pagination_1_ident).contains(testData.historic_page.click_pagination_1).click()
   //cy.get(".MuiPagination-ul").contains('2').click()

  })
    })