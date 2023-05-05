/// <reference types="Cypress" />

describe('Alert Examples', () => {
    beforeEach(()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    })
    it('Verifies window alert box when button is clicked', ()=>{
 
        cy.get("input[onclick='show_alert()']").click()

        cy.on('window:alert', (t)=>{  //validates the text on the alert window

            expect(t).to.equal('I am an alert box!')
        })
    })

    it('Verifies window confirm box when button is clicked', ()=>{
       
        cy.get("input[onclick='show_confirm()']").click()

        cy.on('window:alert', (t)=>{  //validates the text on the alert window

            expect(t).to.equal('I am a confirm alert')
        })

        cy.get('#confirmexplanation').contains('You clicked OK, confirm returned ').should('be.visible')
    })

    it('Verifies confirmation message when window confirm box alert is cancelled', ()=>{
        
        cy.get("input[onclick='show_prompt()']").click()

        cy.on('window:confirm', ()=> false);

        cy.get('#promptexplanation').contains('You clicked Cancel').should('be.visible')
    })
})