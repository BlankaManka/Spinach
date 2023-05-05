// ///<reference types="Cypress" />
describe("Checj UI elements", () =>{
    it("Checking radio buttons", ()=>{

        //visibility of radio buttons
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons -- only 1 button can be checked
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        //doing the reverse of the previous step
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("Checking Checkboxes", ()=>{

        //visibility of radio buttons
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //checking the visibility of the element
        cy.get("input#monday").should('be.visible')

        //selecting individual checkboxes. I select the checkbox and then I will verify if it is checked or not
        cy.get("input#monday").check().should('be.checked')

        //unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')   
        
        //selecting all the checkboxes - need a locator that point to all the elements
        //tag   -          class       -           attribute
        //input -  form-check-input    -    [type='checkbox']
        cy.get("input.form-check-label[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-label[type='checkbox']").uncheck().should('not.be.checked')

        //select the 1st and last checkbox
        cy.get("input.form-check-label[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-label[type='checkbox']").last().check().should('be.checked')


    })
})