describe('main page',() => {
  beforeEach(() => {
    cy.fixture('./games.json').then((allGames) => {
      cy.intercept('GET', 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=DSHOCsJGeA', {
        statusCode: 200,
        body: allGames
      })
    cy.visit('http://localhost:3000/');
  })
}