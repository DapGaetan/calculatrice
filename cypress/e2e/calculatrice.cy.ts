describe('Calculatrice', () => {

  it('Effectue une addition', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '3');
  });

  it('Effectue une soustraction', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="moins"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '2');
  });

  it('Effectue une multiplication', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="multiplication"]').click();
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '24');
  });

  it('Effectue une division', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="division"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '3');
  });

  it('Effectue une division par zéro', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="division"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', 'NaN');
  });

  it('Effectue une opération avec plusieurs opérateurs', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="multiplication"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '30');
  });
  

  it('Effectue un test avec un seul chiffre', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '0');
  });

  it('Efface l\'écran avec le bouton C', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="clear"]').click();
    cy.get('[data-cy="result"]').should('have.text', '');
  });

  it('Effectue une addition avec un nombre négatif', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="moins"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="egal"]').click();
    cy.get('[data-cy="result"]').should('have.text', '-2');
  });

});
