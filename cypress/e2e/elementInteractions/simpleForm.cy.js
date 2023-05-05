describe('Contact Us',()=>{

    beforeEach(() =>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })
    
    it('Sends form with invalid email address', ()=>{

        cy.get("input[name=first_name]").type("Blanka").should('be.visible')
        cy.get("input[name=last_name]").type("Kulcsar").should('be.visible')
        cy.get("input[name=email]").type("invalid@").should('be.visible')
        cy.get("textarea[name=message]").type("Wrong email test").should('be.visible')
        cy.get("input[type=submit]").click()
        cy.get('body').contains("Error: Invalid email address").should('be.visible')
        
    })

    it('Sends form without required fields', () =>{
       
        cy.get("input[name=email]").type("valid@example.com").should('be.visible')
        cy.get("input[type=submit]").click()
        cy.get('body').contains("Error: all fields are required").should('be.visible')
 
    })
    
    it('Successfully sends form with valid data',()=>{
       
        cy.get("input[name=first_name]").type("Blanka").should('be.visible')
        cy.get("input[name=last_name]").type("Kulcsar").should('be.visible')
        cy.get("input[name=email]").type("valid@example.com").should('be.visible')
        cy.get("textarea[name=message]").type("Correct test run").should('be.visible')

        cy.get("input[type=submit]").click()
        
        cy.url().should('contain', '/contact-form-thank-you')

        //cy.url().should('eq','https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')

        cy.get("div[id='contact_reply']").contains("Thank You for your Message!")

    })

})