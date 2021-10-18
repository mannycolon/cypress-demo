import { ENDPOINT, EMOJI_RESPONSE } from './utils'

describe('Emoji Search App - network tests', () => {
  it('displays emojis returned from the backend', () => {
    cy.visit('/')
    // Server isnt working for this app
    // cy.intercept('GET', ENDPOINT, EMOJI_RESPONSE)
    cy.get('[data-cy="emoji-row"]').contains('Joy')
    cy.get('[data-cy="emoji-row"]').contains('Smiley')
    cy.get('[data-cy="emoji-row"]').contains('Smile')
    // cy.get('[data-cy="emoji-row"]').should('have.length', 3)
  })
})