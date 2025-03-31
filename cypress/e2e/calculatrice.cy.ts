describe('Calculatrice', () => {

  it('Effectue une addition', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '3');
    cy.get('[data-cy="historique"]').should('contain', '1 + 2 = 3');
  });

  it('Effectue une soustraction', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="moins"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '2');
    cy.get('[data-cy="historique"]').should('contain', '5 - 3 = 2');
  });

  it('Effectue une multiplication', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="multiplication"]').click();
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '24');
    cy.get('[data-cy="historique"]').should('contain', '4 * 6 = 24');
  });

  it('Effectue une division', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="division"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '3');
    cy.get('[data-cy="historique"]').should('contain', '9 / 3 = 3');
  });

  it('Effectue une division par zéro', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="division"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', 'NaN');
    cy.get('[data-cy="historique"]').should('contain', '7 / 0 = NaN');
  });

  it('Effectue un test avec un seul chiffre', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '0');
    cy.get('[data-cy="historique"]').should('not.contain', '0 = 0'); 
  });
  

  it('Efface l\'écran avec le bouton C', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="clear"]').click();
    cy.get('[data-cy="result"]').should('have.text', '0');
  });
});
