/// <reference types="Cypress" />

describe('Radio Buttons', () => {

    beforeEach(()=>{
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

    it('Marks each radio button', ()=>{
        cy.get('#radio-buttons').should('be.visible').should('not.be.checked')
        cy.get("input[value=green]").should('be.visible').check().should('be.checked')

        cy.get("input[value=blue]").should('be.visible').check().should('be.checked')
        cy.get("input[value=green]").should('not.be.checked')

        
        cy.get("input[value=yellow]").should('be.visible').check().should('be.checked')
        cy.get("input[value=blue]").should('not.be.checked')

        cy.get("input[value=orange]").should('be.visible').check().should('be.checked')
        cy.get("input[value=yellow]").should('not.be.checked')

        cy.get("input[value=purple]").should('be.visible').check().should('be.checked')
        cy.get("input[value=orange]").should('not.be.checked')
    })
    
    it('Verifies state of radio buttons', ()=>{
        cy.get("input[value=lettuce]").should('be.visible').should('not.be.checked')

        cy.get("input[value=cabbage]").should('be.visible').should('be.disabled')

        cy.get("input[value=pumpkin]").should('be.visible').should('be.checked')

        //as radio uttons are unchecked by checking another one instead, furst I checked the Lettuce radio buttonn instead of unchecking 1st the Pumpkin radio button

        cy.get("input[value=lettuce]").check()
        cy.get("input[value=pumpkin]").should('not.be.checked')
        cy.get("input[value=lettuce]").should('be.visible')
        cy.get("input[value=cabbage]").should('be.disabled')
    })
})