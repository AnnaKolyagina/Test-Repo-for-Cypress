describe('HW27 part 2 test intercept', () => {
  it('Check success message', () =>{
        cy.visit('https://pu5hds6usi.execute-api.us-east-1.amazonaws.com/mocks');
        cy.get('#fetchBtn').click();
        cy.get('#result').should('have.text', 'Success! Expected data received.');
    }) 

  it('Check 401 error', () => {
    cy.visit('https://pu5hds6usi.execute-api.us-east-1.amazonaws.com/mocks');
    cy.intercept('GET', '**?action=getData',
      {
        statusCode: 401,
        body: {}
      }
    ).as('getData401');
    cy.get('#fetchBtn').click();
    cy.wait('@getData401');
    cy.get('#result').should('have.class', 'error').and('contain.text', 'Error 401: Unauthorized');
  });

  it('Check 500 error', () => {
    cy.visit('https://pu5hds6usi.execute-api.us-east-1.amazonaws.com/mocks');
    cy.intercept('GET', '**?action=getData',
      {
        statusCode: 500,
        body: {
          message: 'Internal Server Error'
        }
      }
    ).as('getData500');
    cy.get('#fetchBtn').click();
    cy.wait('@getData500');
    cy.get('#result').should('have.class', 'error').and('contain.text', 'Error 500').and('contain.text', 'Internal Server Error');
  });

});



