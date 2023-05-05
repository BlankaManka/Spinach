describe('My first test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    //Should be a new url which includes 'commands/actions'
    cy.url().should('include','/commands/actions')

    //get an input tyoe into it
    cy.get('.action-email').type('fake@email.com')

    //verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})