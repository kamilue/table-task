describe('Table component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a correct table size', () => {
    cy.get('table').invoke('outerWidth').should('eq', 200);
    cy.get('table').invoke('outerHeight').should('eq', 200);
  });

  it('should display correct text in each cell', () => {
    const expectedTexts = ['1A', '1B', '1D', '2A', '2C', '3A', '3C', '4D'];

    cy.get('td').each(($cell, index) => {
      cy.wrap($cell).contains(expectedTexts[index]);
    });
  });
});
