//get e pt CSS locator
//cy.xpath e pt xpath locators


describe('XPathLocators', () =>{

    it('find number of products', () =>{

        cy.visit("url of application"),
        cy.xpath("xpath: //ul[@id='homefeatured']/li").should('jave.length',7)//gets me all the elements-products (7 db kene legyen)
    })

    it('chained xpath', () =>{

        cy.visit("url of application"),
        cy.xpath("xpath: //ul[@id='homefeatured']").xpath("./li").should('jave.length',7)   //chained xpath --- ugyanaz mind a felso
    })
})