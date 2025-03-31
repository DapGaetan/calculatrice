describe('Calculatrice', () => {
  it('Effectue une addition', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '3');
  });
});
