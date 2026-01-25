describe('HW27 part 1', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
  })

  it('Check the logo on inventory page', () => {
    cy.get('.app_logo').should('have.text', 'Swag Labs');
  })

  it('Check burger menu is available and has 4 elements: all items, about, logout, reset app state', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('.bm-item').should('have.length', 4)
    .and('contain.text', 'All Items')
    .and('contain.text', 'About')
    .and('contain.text', 'Logout')
    .and('contain.text', 'Reset App State');
  })

  it('Check item is added to the cart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible');
  cy.get('.shopping_cart_badge').should('have.text', '1');
});

it('Check sorting by price from low to high', () => {
  cy.get('[data-test="product-sort-container"]').select('lohi');
  cy.get('.inventory_item_price').first().invoke('text')
    .then((price) => {
      expect(price.trim()).to.eq('$7.99');
    });
});

  it('Check logout', () => {
    cy.logout();
    cy.get('#login-button').should('be.visible');
  })
})