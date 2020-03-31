describe('As a user I want to verify google engine', () => {
  it('I want to test search', () => {
    cy.visit('');
    cy.sampleFillInput('input[type="text"]', 'The software house {enter}');
  });
});
