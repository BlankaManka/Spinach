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
    
        it.skip('advanced search' , ()=>{
            cy.log("**** advanced searching *****");
        })
        
    
        it('listing products' , ()=>{
            cy.log("**** product listing *****");
        
    
        })
    })