describe('Calculatrice', () => {
  it('Effectue une addition', () => {
     // allez sur l'app
    cy.visit('http://localhost:4200');

    // utiliser les touche du numpad
    cy.get('[data-cy="input1"]').type('2'); 
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="input2"]').type('3');
    cy.get('[data-cy="egal"]').click();

    // Vérifie le résultat
    cy.get('[data-cy="result"]').should('have.text', '5');
  });
});
