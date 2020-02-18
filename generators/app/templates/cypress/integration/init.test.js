describe('cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('can visit the app', () => {
    // cy.visit('http://localhost:3000');
    cy.visit('/');
    // cy.wait(1000)
    //   .toMatchImageSnapshot();
  });
});
