//the 4 provided HOOKS are: -> to be used in the describe section before the "it" blocks
//before => executed only once before all the "it" blocks
//after => executed only once after all the "it" blocks
//beforeEach => exec multiple times, before every "it" block
//afterEach => exec multiple times, after every "it" block

//TAGS: -> to be used in case of "it" blocks
//.skip => it block gets skipped
//.only => csak az az egy block lesz exekutalva

//log command -> prints a command log message


describe('MyTestSuite', ()=>{

before(()=>{

    cy.log("**** launch app *****");
    
})


after(()=>{ 

    cy.log("**** close app *****");
    
})


beforeEach(()=>{

    cy.log("**** Login *****");
    
})


afterEach(()=>{

    cy.log("**** Logout *****");
    
})

    it('search', () =>{

        cy.log("**** searching *****");
    })

    it('advanced search' , ()=>{

        cy.log("**** advanced searching *****");
    })
    

    it.only('listing products' , ()=>{

        cy.log("**** product listing *****");
    

    })
})