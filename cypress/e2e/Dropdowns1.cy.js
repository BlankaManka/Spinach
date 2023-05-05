/// <reference types="Cypress" />
describe('handle dropdowns', ()=>{

    it.skip('Dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('Iceland')   //select the option from the dropdown
        .should('have.value','Iceland') //check that the option is the rght one

    })

    it.skip('Dropdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')                      //beirom keresobe h Italy es megnyomom az entert
        cy.get('#select2-billing_country-container').should('have.text','Italy')           //megnezem, hogy a dropdown erteke is Italy les, nem csak a keresoje

    })

    it.skip('Auto suggest Dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()     //gets all the optios of the auto suggestions and that has to contain the DU


    })

    it('Dynamic Dropdown', ()=>{

        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length', 11)
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })

        cy.get("input[name='q']").should('have.value','cypress automation tutorial')

    })

})
//   div.wM6W7d>span   /captures all the suggestions
//   each($el, index, $list)
//   $list    all elements which are captured are stored into an array
//   index     every element in the array is represented with an index
//   $el       represents the actual element