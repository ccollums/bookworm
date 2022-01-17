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


})