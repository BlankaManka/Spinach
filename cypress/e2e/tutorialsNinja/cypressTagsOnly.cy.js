describe('Tags Only', ()=>{

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