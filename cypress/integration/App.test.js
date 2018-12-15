describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a logo', () => {
    cy.get('img.App-logo').should('have.attr', 'alt', 'logo')
  })
})
