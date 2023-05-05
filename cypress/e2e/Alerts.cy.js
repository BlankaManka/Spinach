describe('Alerts',()=>{

    // 1. JS alert: it will have some text and an OK button

    it.skip('JS alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();


        cy.on('window:alert', (t)=>{  //validates the text on the alert window

            expect(t).to.contains('I am a JS Alert');
        })

        //alert window automatically closed by cypress
        //now we are validating th result text

        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    // 2. JS confirm alert: It will have some text with OK and Cancel buttons
    it.skip('JS confirm alert OK button', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{  //validates the text on the alert window

            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress here auromatically closed the window by using OK button
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it.skip('JS confirm alert Cancel button', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{  //validates the text on the alert window

            expect(t).to.contains('I am a JS Confirm');
        })
        
        //cypress here  closes the window by using Cancel button
        cy.on('window:confirm', ()=> false);  
       
        cy.get('#result').should('have.text','You clicked: Cancel')

    })
    // 3. JS prompt alert: It will have some text with a text box for user input along with OK

    it.skip('JS prompt alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        //this event will be called later on 
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress here auromatically closed the window by using OK button
        cy.get('#result').should('have.text','You entered: welcome')

        //cypress here  closes the window by using Cancel button
        //cy.on('window:confirm', ()=> false);  
        //cy.get('#result').should('have.text','You entered: null')
    })

       
    // 4. Authenticated alert

    it('Authenticated alert', ()=>{

        //OPTION 1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                        {username:"admin", 
                                                                        password:"admin"}
                                                                    });
        cy.get("div[class='example'] p").should('have.contains',"Congratulations")*/
        
        //OPTION 2

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']p").should('have.contains',"Congratulations")

    })
    })