/// <reference types="Cypress" />

describe("HTML Form Example",()=>{
    beforeEach(()=>{
        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html")
           
        cy.get('form').should('be.visible')

        cy.get("input[name='username']").type("Test123").should('have.value','Test123')
        cy.get("input[name='password']").type("passwd123").should('have.value','passwd123')
        cy.get("textarea[name='comments']").type("This is a test message. Hello!").should('contains.value','This is a test message. Hello!')
        cy.get("input[value='cb3']").uncheck().should('not.be.checked')
        cy.get("input[value='cb1']").check().should('be.visible')
        cy.get("input[value='rd1']").check().should('be.visible')
        cy.get("input[value='rd2']").should('be.visible').should('not.be.checked')
        cy.get("input[value='rd3']").should('be.visible').should('not.be.checked')
        cy.get("select[multiple='multiple']").select(['ms1','ms2']).should('be.visible')
        cy.get("select[name='dropdown']").select('dd4').should('be.visible')
    })

    it("Fill in and successfully reach the confirmation screen",()=>{

        cy.get("input[type='submit']").click()
        cy.url().should('contain', '/styled/the_form_processor')
        cy.get("#_valueusername").should('have.text','Test123')
        cy.get("#_valuepassword").should('have.text','passwd123')
        cy.get("#_valuecomments").should('contains.text','This is a test message. Hello!')
        cy.get("#_valuecheckboxes0").should('have.text','cb1')
        cy.get("#_valueradioval").should('have.text','rd1')
        cy.get("#_valuemultipleselect0").should('have.text','ms1')
        cy.get("#_valuemultipleselect1").should('have.text','ms2')
        cy.get("#_valuedropdown").should('have.text','dd4')

        cy.get("#back_to_form").click()
        cy.url().should('eq','https://testpages.herokuapp.com/styled/basic-html-form-test.html')

    })

    it("Clears filled in data from the form when choosing to Cancel",()=>{

        cy.get("input[type='reset']").click()
        cy.get("input[name='username']").should('be.empty')
        cy.get("input[name='password']").should('be.empty')
        cy.get("textarea[name='comments']").should('have.text','Comments...')
        cy.get("input[value='cb3']").should('be.checked')
        cy.get("input[value='rd2']").should('be.enabled')
        cy.get("option[value='ms4']").should('be.enabled')
        cy.get("option[value='dd3']").should('be.selected')
                                      
        
    })
})

