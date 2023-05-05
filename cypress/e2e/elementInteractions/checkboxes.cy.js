/// <reference types="Cypress" />


beforeEach(()=>{
    cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
})
describe('Checkboxes', () => {

    it('Checks/Unchecks 1 checkbox', ()=>{
       
        cy.get("input[type=checkbox][value=option-1]").should('be.visible')
        cy.get("input[type=checkbox][value=option-1]").check().should('be.checked')
        cy.get("input[type=checkbox][value=option-1]").uncheck().should('not.be.checked')
    })

    it('Checks/UnchecksOption 2 checkbox', ()=>{
        
        cy.get("input[type=checkbox][value=option-2]").should('be.visible')
        cy.get("input[type=checkbox][value=option-2]").check().should('be.checked')
        cy.get("input[type=checkbox][value=option-2]").uncheck().should('not.be.checked')
        
    })

    it('Checks/Unchecks Option 3 checkbox', ()=>{
       
        cy.get("input[type=checkbox][value=option-3]").should('be.visible')
        cy.get("input[type=checkbox][value=option-3]").check().should('be.checked')
        cy.get("input[type=checkbox][value=option-3]").uncheck().should('not.be.checked')
        cy.get("input[type=checkbox][value=option-3]").check().should('be.checked')
        
    })

    it('Checks/Unchecks Option 4 checkbox', ()=>{
       
        cy.get("input[type=checkbox][value=option-4]").should('be.visible')
        cy.get("input[type=checkbox][value=option-4]").check().should('be.checked')
        cy.get("input[type=checkbox][value=option-4]").uncheck().should('not.be.checked')
        cy.get("input[type=checkbox][value=option-4]").check().should('be.checked')
        
    })

})