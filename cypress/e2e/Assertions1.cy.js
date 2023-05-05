// 1. implicit
//KEYWORDS: should/and
//params: eq, contains, exist, have.length, have.value, include, etc...

// 2. explicit
//expect -behaviour driven development
//assert -test driven development
 

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" /> 
describe("assertions demo", ()=>{
    /*it("implicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //capturing the url --- these are assertions
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //OR
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        //OR
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','blanka') //negative assertion


        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')  //will get the logo element
        //cy.get('.orangehrm-login-branding > img').should('exist')
        .and('exist')

        //i want to know how many links are available, I want to capture all the links
        cy.xpath("//a").should('have.length', 5)
        cy.get("input[placeholder='Username']").type("Admin")//adds valie to input box
        cy.get("input[placeholder='Username']").should('have.value','Admin')
    })*/

    it("explicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then((x)=>{

            //BDD style
            let actName=x.text()            //capture the title of particular element
            expect(actName).to.equal(expName) //comparing the actual name with the expected

            //TDD style
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)
        })



       

    })


})