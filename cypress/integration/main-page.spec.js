describe('main page',() => {
  beforeEach(() => {
    cy.fixture('./books.json').then((allBooks) => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z', {
        statusCode: 200,
        body: allBooks
      })
    cy.visit('http://localhost:3000/#/');
  })
})

it('should contain title of the application, a form, button, and the best sellers list', () => {
  cy.get('.title').contains('BookWorm')
  cy.get('h2').contains(`Best Seller's List`)
  cy.get('.goal-sentence > :nth-child(1)').contains('read')
  cy.get('.goal-sentence > :nth-child(2)').contains(0)
  cy.get('.goal-sentence > :nth-child(3)').contains('of your')
  cy.get('.goal-sentence > :nth-child(4)').contains(0)
  cy.get('.goal-sentence > :nth-child(5)').contains('goal')
  cy.get('input').should('be.visible')
  cy.get('button').should('be.visible')
  cy.get('.bottom-box').contains('Click books to add to your must read list!')
  cy.get('.nav-pages')
})

it('When the submit button is pushed without writing in the input, an error message appears', () => {
  cy.get('button').click()
  cy.get('.error').contains('Please add a goal')
})

it('When a goal is written in the input, the value is reflected in that form input', () => {
  cy.get('input').type(10).should('have.value', 10)
})

it('When a user types in a goal and hits submit their goal updates on the page', () => {
  cy.get('input').type(10).should('have.value', 10)
  cy.get('button').click()
  cy.get('.goal-sentence > :nth-child(4)').contains(10)

})



})
