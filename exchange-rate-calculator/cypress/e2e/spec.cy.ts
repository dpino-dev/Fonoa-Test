describe('Test End 2 End', () => {
  beforeEach(() => {
    cy.request('http://localhost:3000/api/symbols').then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
  it('Visit Exchange Calculator', () => {

    cy.visit('http://localhost:3000')
    cy.get('input').should('have.class', 'chakra-numberinput__field').type('1000')
    cy.get('#From').should('have.class', 'chakra-select').select('United States Dollar (USD)')
    cy.get('#To').should('have.class', 'chakra-select').select('Euro (EUR)')
    cy.get('.chakra-button').click()
  })
})
