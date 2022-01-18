describe('about page', () => {
	beforeEach(() => {
		cy.fixture('./books.json').then((allBooks) => {
			cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z', {
				statusCode: 200,
				body: allBooks
			})
			cy.visit('http://localhost:3000/#/');
			cy.get('.hamburger').click()
			cy.get(':nth-child(4) > .links').click()
		})
	})

	it('should see an app summary, about the author, image of author, and books the author enjoys', () => {
		cy.get('.title').contains('BookWorm')
		cy.get('h2').contains(`About`)
		cy.get('.app-summary').contains('BookWorm was created')
		cy.get('div.bio > .bio').contains(`Hi! I'm Carly`)
		cy.get('.headshot').should('be.visible')
		cy.get('.bottom-box').contains('Scroll through some of my favorite novels!')
		cy.get('[src="/static/media/crawdads .b6459aba95e61ad0a022.png"]').should('be.visible')
		cy.get('.hamburger').click()
		cy.get(':nth-child(1) > .links').contains('Home')
		cy.get(':nth-child(2) > .links').contains('Must Reads')
		cy.get(':nth-child(3) > .links').contains('Completed Books')
		cy.get(':nth-child(4) > .links').contains('About')
	})

	it('should be able to click hamburger button and go to another page', () => {
		cy.get('.hamburger').click()
		cy.get(':nth-child(1) > .links').click()
		cy.get('h2').contains(`Best Seller's List`)
	})

})