describe('Ninja test', () => {
    it('Visits Tutorials Ninja', () => {
      //Visit the demo website http://tutorialsninja.com/demo/index.php?route=common/home
      cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home')

      //Make an assertion on the homepage URL (validate that we are on the homepage of the website)
      cy.url().should('include','/home')

      //Verify that the main page heading is visible on the page and contains the text “Your Store”.
      cy.contains('Qafox.com').should('be.visible')
      
      //Verify that the page is displaying a visible search input field.
      cy.get('.input-group').should('be.visible')

    })
  })