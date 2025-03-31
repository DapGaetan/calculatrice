describe('Calculatrice', () => {
  it('Effectue une addition', () => {     // allez sur l'app
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="input1"]').type('2');// utiliser les touche du numpad
    cy.get('[data-cy="operateur"]').select('+');
    cy.get('[data-cy="input2"]').type('3');
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '5');// Vérifie le résultat
  });
});
