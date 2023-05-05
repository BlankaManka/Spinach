/// <reference types="Cypress" />

beforeEach(() => {

    cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#dropdowm-menu-1').should('be.visible')

})

describe('Dropdown with Select', () => {

    it('Selects SQL from the first Dropdown', () => {

        cy.get('#dropdowm-menu-1').select('SQL').should('be.visible')

    })

    it('Selects JAVA from the first Dropdown', () => {

        cy.get('#dropdowm-menu-1').select('JAVA').should('be.visible')

    })

    it('Selects C# from the first Dropdown', () => {

        cy.get('#dropdowm-menu-1').select('C#').should('be.visible')

    })

    it('Selects Python from the first Dropdown', () => {

        cy.get('#dropdowm-menu-1').select('Python').should('be.visible')

    })

})
