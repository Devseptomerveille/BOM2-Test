/// <reference types="cypress"/>
//import login page field
import { LoginPage } from "../pages/LoginPage";
const loginPage = new LoginPage 

//import page identifiers
import { HomePagePage } from "../pages/HomePagePage"

//import page identifiers
const homePagePage = new HomePagePage;

let testData = null;
let test_filePath = "testdata.json"

describe("connection to the cypress BOM2.0 page", () => {
  before(() => {
    cy.readJsonFile(test_filePath).then((data) => {
      testData =data
    })
  })
// this part represented the login page and he is executed before all other tests
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
    cy.get(loginPage.user_name_field).type("auto_webagent")
      cy.get(loginPage.password_field ).type("Smobil@2023")
      cy.get(loginPage.button_login_field).click()
      cy.wait(500)
  })

  //represent the elements that we see directly in the home page
    it("preview of the home page after login", () => {
      
        cy.get(homePagePage.welcome_to_your_ident).contains(testData.home_page.welcome_text1)
        cy.get(homePagePage.digital_payment_ident).contains(testData.home_page.digital_payment_text2)
        cy.get(homePagePage.platform_ident).contains(testData.home_page.platform_text3)
        cy.get(homePagePage.bulk_payment_ident).contains(testData.home_page.bulk_payment_text4)
    })

    //represent the elements that we see on the left side menu bar
      it("menu that contains components on the left side", () => {
        cy.get(homePagePage.collections_ident).should('exist')
        // cy.get(".MuiListItemText-root").eq(0).within(() => {
        // })
        cy.get(homePagePage.stores_ident).contains(testData.home_page.stores_id_menubar)
        cy.get(homePagePage.settings_ident).contains(testData.home_page.settings_id_menubar)
        cy.get(homePagePage.historiq_and_report_ident ).contains(testData.home_page.history_Reports_id_menubar)
        cy.get(homePagePage.transaction_history_ident).contains(testData.home_page.transaction_History_id_menubar)
        cy.get(homePagePage.request_history_ident).contains(testData.home_page.request_History_id_menubar)
        cy.get(homePagePage.disbursement_ident).contains(testData.home_page.disbursement_id_menubar)
        cy.get(homePagePage.bulk_payment_ident).contains(testData.home_page.bulk_Payment_id_menubar)
        cy.get(homePagePage.remittance_ident).contains(testData.home_page.remittance_id_menubar)
        cy.get(homePagePage.send_ident).contains(testData.home_page.send_id_menubar)
        cy.get(homePagePage.history_ident).contains(testData.home_page.history_id_menubar)
        cy.get(homePagePage.reports_ident).contains(testData.home_page.reports_id_menubar)
        cy.get(homePagePage.distribution_ident).contains(testData.home_page.distribution_id_menubar)
        cy.get(homePagePage.billers_and_services_ident).contains(testData.home_page.billers_id_menubar)
        cy.get(homePagePage.history_ident_in_distribution).contains(testData.home_page.history_dist_id_menubar)
        cy.get(homePagePage.self_top_up_ident).contains(testData.home_page.self_top_up_menubar)
        cy.get(homePagePage.fund_account_ident).contains(testData.home_page.fund_id_menubar)
        cy.get(homePagePage.configurations_ident).contains(testData.home_page.configurations_id_menubar)
    })
  

})

