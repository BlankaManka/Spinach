//Locators can be CSS Selectors OR xPath locators(cypress xpath plugin needed)

// cy.get(locator) => we locate the element
//tag id
//tag class
// tag attribute
//tag class attribute

//tag#id
//tag.class
//tag[attribute='value']
//tag.class[attribute='value'] ------ ex: input.search_query='search_query'

describe('CSSLocators', () =>{

    it("csslocators", ()=>{    //name of the test
    //in the it block comes the script

        cy.visit("url jon ide")
        cy.get("pass the locator").type("pass the element") //.type passes the value to the element  //here we used id, the tag is optional
        cy.get("locator here").click() //ex: click on the search button
        cy.get(".class").contains('ceva cuvant') //verify the text in the element ---- ASSERTATION
    })
})