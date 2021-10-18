describe('Login', () => {
  it('Sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.get('input[type="email"]').type('colonmanuel7@gmail.com')
    cy.get('input[type="password"]').type('Password')
    cy.get('.btn').contains('Sign in').should('be.visible').click()
  })
})
