/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Add item to the cart', () => {
    it('Search Book and add to the cart', () => {

        //navigate to URL
        cy.visit("www.ebay.com");

        //Enter in Textbox and click Search
        cy.get('#gh-ac').type('book');
        cy.get("input[type='submit']").click();
        cy.wait(4000);

        //Click on the First item displayed and open in the parent window
        cy.get('.s-item__link').eq(2).invoke('removeAttr','target').click(); 

       //Click on 'Add to cart'
         cy.get('#atcBtn_btn_1').click({force:true});

        //Navigate to CheckOut page (New Domain) and check value of the cart
         cy.origin("https://cart.payments.ebay.com/"), () =>{
            cy.get('#gh-cart-n').should('have.value','1')
         };    
    })
  })